export interface GenericService<E> {
    save(e: E): E;
    findById(id: number): E;
    findAll(): E[];
    delete(id: number);
    update(e: E): E;
}