type Nullable<T> = T | null;

class CreateNode {
  private _next: Nullable<CreateNode> = null;
  private _prev: Nullable<CreateNode> = null;

  constructor(private _value: number) {}

  set next(v: CreateNode) {
    this._next = v;
  }

  get next() {
    return this._next;
  }

  set prev(v: CreateNode) {
    this._prev = v;
  }

  get prev() {
    return this._prev;
  }

  set value(v: number) {
    this._value = v;
  }

  get value() {
    return this._value;
  }
}

class DoublyLinkedList {
  private firstEl: Nullable<CreateNode> = null;

  private lastEl: Nullable<CreateNode> = null;

  private _length = 0;

  add(value: number): CreateNode {
    this._length++;

    const newNode = new CreateNode(value);

    if (!this.isEmpty()) {
      this.lastEl.next = newNode;

      newNode.prev = this.lastEl;

      this.lastEl = newNode;

      return newNode;
    }

    this.firstEl = this.lastEl = newNode;

    return newNode;
  }

  remove() {
    this._length--;

    const newEl = this.lastEl.prev;

    if (newEl) {
      newEl.next = null;
    } else {
      this.firstEl = null;
    }

    this.lastEl = newEl;
  }

  find(index: number) {
    if (!this.isEmpty()) {
      let curr = this.firstEl;

      let step = 0;

      while (curr !== null) {
        if (step === index) {
          console.log(curr.value);
          return curr.value;
        }
        curr = curr.next;
        step++;
      }
    }

    console.log(null);
    return null;
  }

  update(index: number, newValue: number) {
    if (!this.isEmpty()) {
      let curr = this.firstEl;

      let step = 0;

      while (curr !== null) {
        if (step === index) {
          curr.value = newValue;
          console.log(curr.value);
          return curr.value;
        }
        curr = curr.next;
        step++;
      }
    }

    console.log(null);
    return null;
  }

  isEmpty(): boolean {
    return !Boolean(this.firstEl);
  }

  getLength() {
    return this._length;
  }

  print(): void {
    if (!this.isEmpty()) {
      let curr = this.firstEl;

      while (curr !== null) {
        console.log(curr.value);

        curr = curr.next;
      }
    }
  }
}

const list = new DoublyLinkedList();

list.add(53);
list.add(101);
list.add(98);
list.add(36);

list.update(2, 700);
list.print();
