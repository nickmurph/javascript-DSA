import TrieNode from "./trie_node.js";

export default class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    //if the word exists in the Trie, return its terminus node
    //if not, return null
    search(word){
        let currentNode = this.root;
        
        for (let i in word){
            let curChar = word[i];
            if (currentNode.children[curChar]){
                currentNode = currentNode.children[curChar];
            }else {
                return null;
            }
        }
        return currentNode;
    };


    //if the word doesn't already exist in the tree, add nodes for it, beginning with the first char
    //  that's not represented in the Trie
    insert(word){
        let currentNode = this.root;
        for (let i in word){
            let curChar = word[i];
            if (currentNode.children[curChar]){
                currentNode = currentNode.children[curChar];
            }else {
                let newNode = new TrieNode();
                currentNode.children[curChar] = newNode;
                currentNode = newNode;
            }
        }
        currentNode.children['*'] = null;
    };



    //return an array of all the words that can be derived from startNode
    //if a particular node isnt given, start from the root node and print all words in the Trie
    collectAllWords(startNode=this.root, word='', words=[]){
        let currentNode = startNode;
        for (let key in currentNode.children){
            let childNode = currentNode.children[key];
            if (key == '*'){
                words.push(word);
            }else {
                this.collectAllWords(childNode, (word + key), words);
            }
        }
        return words;
    }

    // returns an array of all valid endings to the given prefix
    autocomplete(prefix){
        let currentNode = this.search(prefix);
        if (!currentNode){
            return null;
        }
        return this.collectAllWords(currentNode);
    }
};

