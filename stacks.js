class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Menambah element ke stack (push)
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return `${element} ditambahkan ke posisi ${this.count}`;
    }

    // Menghapus dan return element teratas (pop)
    pop() {
        if(this.count === 0) {
            return 'Stack kosong, tidak ada yang bisa dihapus';
        }
        
        let deleteItem = this.items[this.count - 1];
        this.count--;
        return `${deleteItem} dihapus`;
    }

    // Melihat element teratas (peek)
    peek() {
        if(this.count === 0) {
            return 'Stack kosong';
        }
        return `Element teratas adalah: ${this.items[this.count - 1]}`;
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.count === 0;
    }

    // Mendapatkan ukuran stack
    size() {
        return this.count;
    }

    // Print elements dalam stack
    print() {
        let str = '';
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    // Mengosongkan stack
    clear() {
        this.items = [];
        this.count = 0;
        return 'Stack telah dikosongkan';
    }
}

// Contoh penggunaan
const stack = new Stack();

console.log(stack.isEmpty()); // true

// Menambah beberapa element
console.log(stack.push(100));
console.log(stack.push(200));
console.log(stack.push(300));

console.log(stack.print()); // 100 200 300

console.log(stack.peek()); // Element teratas adalah: 300

console.log(stack.pop()); // 300 dihapus
console.log(stack.pop()); // 200 dihapus

console.log(stack.size()); // 1

console.log(stack.clear()); // Stack telah dikosongkan
console.log(stack.isEmpty()); // true