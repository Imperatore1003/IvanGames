import json

def main():
    with open("word-list.json", "r") as word_list_json:
        word_list = json.loads(word_list_json.read())

    words = []
    accents_words = []

    for word in word_list:
        words.append(word["word"])
        for char in list(word["word"]):
            if char in ["à", "è", "ì", "ò", "ù", "é", " "]:
                accents_words.append(word["word"])
                continue

    
    duplicates = [word for word in words if words.count(word) > 1]
    unique_duplicates = list(set(duplicates))

    print("Parole totali: ", len(words),
          "\nDuplicati (", len(unique_duplicates), "):\n",
          unique_duplicates,
          "\nParole accentate (", len(accents_words), "):\n",
          accents_words,
        sep="")

if __name__ == "__main__":
    main()