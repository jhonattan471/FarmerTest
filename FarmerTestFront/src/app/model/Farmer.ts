export interface Farmer {
    id: string;
    document: Document;
    name: string;
    address: Address;
}
export interface Address {
    street: string;
    state: string;
    address: string;
    country: string;
}
export interface Document {
    documentNumber: string;
    documentType: string;
}