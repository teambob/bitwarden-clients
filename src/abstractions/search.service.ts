import { CipherView } from '../models/view/cipherView';

export abstract class SearchService {
    clearIndex: () => void;
    isSearchable: (query: string) => boolean;
    indexCiphers: () => Promise<void>;
    searchCiphers: (query: string, filter?: (cipher: CipherView) => boolean) => Promise<CipherView[]>;
}
