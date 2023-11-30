import json

def main():
    with open("word-list.json", "r") as word_list_json:
        word_list = json.loads(word_list_json.read())

    words = []

    for word in word_list:
        words.append(word["word"])

    
    duplicates = [word for word in words if words.count(word) > 1]
    unique_duplicates = list(set(duplicates))

    print("Parole totali: ", len(words), "\nDuplicati (", len(unique_duplicates), "):\n", unique_duplicates, sep="")

if __name__ == "__main__":
    main()