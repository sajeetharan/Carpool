import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    private central = false;
    private centralHostUrl = '';
    private localHostUrl = '';

    getUrl(resource: string): string {
        let resourceUrl: string;
        if (this.central) {
            resourceUrl = this.centralHostUrl + resource;
        } else {
            resourceUrl = this.localHostUrl + resource;
        }
        return resourceUrl;
    }
}
