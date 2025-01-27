// Membuat Queue (Antrian) sederhana
class Queue {
    constructor() {
        this.items = [];
    }

    // Menambah element ke queue (enqueue)
    enqueue(element) {
        this.items.push(element);
        console.log(`${element} ditambahkan ke antrian`);
    }

    // Mengambil element dari queue (dequeue)
    dequeue() {
        if(this.isEmpty()) {
            return "Antrian kosong";
        }
        let element = this.items.shift();
        console.log(`${element} keluar dari antrian`);
        return element;
    }

    // Melihat element pertama
    front() {
        if(this.isEmpty()) {
            return "Antrian kosong";
        }
        return this.items[0];
    }

    // Cek apakah queue kosong
    isEmpty() {
        return this.items.length === 0;
    }

    // Melihat jumlah element dalam queue
    size() {
        return this.items.length;
    }

    // Menampilkan semua isi queue
    tampilkan() {
        console.log("Isi antrian:", this.items);
    }
}

// Contoh penggunaan
const antrian = new Queue();

// Menambah beberapa orang ke antrian
antrian.enqueue("Budi");
antrian.enqueue("Ani");
antrian.enqueue("Citra");

// Melihat isi antrian
antrian.tampilkan();

// Melihat siapa yang di depan antrian
console.log("Orang pertama dalam antrian:", antrian.front());

// Mengeluarkan orang dari antrian
antrian.dequeue();

// Melihat ukuran antrian sekarang
console.log("Jumlah orang dalam antrian:", antrian.size());

// Melihat isi antrian final
antrian.tampilkan();