import { Supplier } from "./supplier";

export class Item {
    id!: number;
    code!: string;
    wording!: string;
    purchasePrice!: number;
    cellPrice!: number;
    stockQuantity!: number;
    alertStockQuantity!: number;
    hasExpirationDate!: boolean;
    expirationDate!: Date;
    unit!: string;
    supplier!: Supplier;
}
