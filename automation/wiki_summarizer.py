
import math
from collections import Counter
import nltk

nltk.download("punkt", quiet=True)
nltk.download("punkt_tab", quiet=True)
nltk.download("stopwords", quiet=True)

from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize


def _cosine_similarity(vec1: dict, vec2: dict) -> float:
    intersection = set(vec1.keys()) & set(vec2.keys())
    numerator = sum(vec1[x] * vec2[x] for x in intersection)

    sum1 = sum(v**2 for v in vec1.values())
    sum2 = sum(v**2 for v in vec2.values())
    denominator = math.sqrt(sum1) * math.sqrt(sum2)

    return float(numerator) / denominator if denominator else 0.0


def extractive_summary(text: str, ratio: float = 0.3, min_sentences: int = 3, diversity_factor: float = 0.5) -> str:

    sentences = sent_tokenize(text)
    total_sents = len(sentences)
    num_to_extract = max(min_sentences, int(total_sents * ratio))

    if num_to_extract >= total_sents:
        return text

    stop_words = set(stopwords.words("english"))

    sent_tokens = []
    sent_entities = []

    for s in sentences:
        words = word_tokenize(s)
        clean_w = [w.lower() for w in words if w.isalnum() and w.lower() not in stop_words]
        sent_tokens.append(clean_w)

        if len(words) > 1:
            entities = [w for w in words[1:] if w.istitle() and w.isalpha()]
            sent_entities.append(len(entities))
        else:
            sent_entities.append(0)

    df = Counter()
    for tokens in sent_tokens:
        df.update(set(tokens))

    tfidf_vectors = []
    base_scores = []

    for idx, tokens in enumerate(sent_tokens):
        if not tokens:
            tfidf_vectors.append({})
            base_scores.append(0.0)
            continue

        vec = {}
        tf = Counter(tokens)
        for w in set(tokens):
            vec[w] = tf[w] * math.log((total_sents + 1) / (df[w] + 1))
        tfidf_vectors.append(vec)

        raw_score = sum(vec.values())
        length_penalty = math.sqrt(len(tokens))
        position_weight = 1.0 + (0.5 * (total_sents - idx) / total_sents)
        entity_boost = 1.0 + (0.1 * sent_entities[idx])
        final_score = (raw_score / length_penalty) * position_weight * entity_boost
        base_scores.append(final_score)

    max_score = max(base_scores) if base_scores else 1.0
    if max_score > 0:
        base_scores = [s / max_score for s in base_scores]

    unselected = list(range(total_sents))
    selected = []

    first_choice = max(unselected, key=lambda i: base_scores[i])
    selected.append(first_choice)
    unselected.remove(first_choice)

    while len(selected) < num_to_extract and unselected:
        mmr_scores = {}

        for i in unselected:
            max_similarity = max(
                _cosine_similarity(tfidf_vectors[i], tfidf_vectors[s]) for s in selected
            )

            mmr_score = (1.0 - diversity_factor) * base_scores[i] - (diversity_factor * max_similarity)
            mmr_scores[i] = mmr_score

        best_next = max(mmr_scores, key=mmr_scores.get)
        selected.append(best_next)
        unselected.remove(best_next)

    selected.sort()

    return " ".join(sentences[i] for i in selected)


