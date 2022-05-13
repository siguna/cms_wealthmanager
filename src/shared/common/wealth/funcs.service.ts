import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable()
export class FuncsService {
    p: any[] = [];
    searchExpand: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    searchExpand$: Observable<boolean> = this.searchExpand.asObservable();
    saveUserEventEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    lConfig = []
    getData(data) {
       
        if (data && data.body && data.body.listAssetDTO && data.body.listAssetDTO.length > 0) {
            this.lConfig = data.body.listAssetDTO
        } else {
            this.lConfig = data
        }
    }

    // STT	Mã vị trí	Tên	Loại vị trí	Trạng thái	Chi nhánh	Quận / Huyện
    searchArr = [
        { id: 1, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 2, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 3, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 4, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 5, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 6, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 8, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 9, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 10, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 11, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 12, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 13, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 14, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' },
        { id: 15, positionCode: 'nvpd7', name: 'name7', position: 'Tram', state: 'khong hieu luc', twon: 'cau giay' }
    ];
    // lConfig = [
    //     {
    //         id: 1, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 2, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Hoàng Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 3, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 4, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 5, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 6, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 7, nCCDVCode: '012345668',
    //         nCCDV: 'Lotte', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 8, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 9, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 10, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 11, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 12, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     },
    //     {
    //         id: 13, nCCDVCode: '012345668',
    //         nCCDV: 'CGV', confirm: true,
    //         lPay: 'ViettelPay',
    //         staffPhone: '0943170675',
    //         bossPhone: '0346157556',
    //         userDev: 'Trần Linh',
    //         province: 'Ha Noi',
    //         kind: 'Loại 1',
    //         timeTraining: '25/6/2019',
    //         timeAccept: '25/12/2019'
    //     }
    // ];
    data = [
        { id: '707', firstName: 'Nguyen', lastName: 'Tuan Anh' },
        { id: '702', firstName: 'Nguyen', lastName: 'Van Anh' },
        { id: '703', firstName: 'Hoang', lastName: 'Thi Anh' },
        { id: '704', firstName: 'Tran', lastName: 'Van Truong' },
        { id: '705', firstName: 'Tran', lastName: 'Hoang An' },
        { id: '706', firstName: 'Nguyen', lastName: 'Tuyet' },
        { id: '707', firstName: 'Tran', lastName: 'Ngoc' },
        { id: '708', firstName: 'Tran', lastName: 'Hai' },
        { id: '709', firstName: 'Tran', lastName: 'Hoang' },
        { id: '770', firstName: 'Hoang', lastName: 'Mai' },
        { id: '777', firstName: 'Nguyen', lastName: 'An' },
        { id: '772', firstName: 'Hoang', lastName: 'Vinh' },
        { id: '773', firstName: 'Pham', lastName: 'Ngoc' },
        { id: '774', firstName: 'Tran', lastName: 'Tuyet' },
        { id: '775', firstName: 'Nguyen', lastName: 'An' },
        { id: '776', firstName: 'Pham', lastName: 'Tuyet' },
        { id: '777', firstName: 'Nguyen', lastName: 'Trung' },
        { id: '778', firstName: 'Pham', lastName: 'Anh' },
        { id: '779', firstName: 'Pham', lastName: 'Mai' },
        { id: '720', firstName: 'Nguyen', lastName: 'Hoang' },
        { id: '727', firstName: 'Pham', lastName: 'Vinh' },
        { id: '722', firstName: 'Nguyen', lastName: 'Hai' },
        { id: '723', firstName: 'Tran', lastName: 'Trung' },
    ];
    dataTable = [
        { id: '707', firstName: 'Nguyen', lastName: 'Tuan Anh' },
        { id: '702', firstName: 'Nguyen', lastName: 'Van Anh' },
        { id: '703', firstName: 'Hoang', lastName: 'Thi Anh' },
        { id: '704', firstName: 'Tran', lastName: 'Van Truong' },
        { id: '705', firstName: 'Tran', lastName: 'Hoang An' },
        { id: '706', firstName: 'Nguyen', lastName: 'Tuyet' },
        { id: '707', firstName: 'Tran', lastName: 'Ngoc' },
        { id: '708', firstName: 'Tran', lastName: 'Hai' },
        { id: '709', firstName: 'Tran', lastName: 'Hoang' },
        { id: '770', firstName: 'Hoang', lastName: 'Mai' },
        { id: '777', firstName: 'Nguyen', lastName: 'An' },
        { id: '772', firstName: 'Hoang', lastName: 'Vinh' },
        { id: '773', firstName: 'Pham', lastName: 'Ngoc' },
        { id: '774', firstName: 'Tran', lastName: 'Tuyet' },
        { id: '775', firstName: 'Nguyen', lastName: 'An' },
        { id: '776', firstName: 'Pham', lastName: 'Tuyet' },
        { id: '777', firstName: 'Nguyen', lastName: 'Trung' },
        { id: '778', firstName: 'Pham', lastName: 'Anh' },
        { id: '779', firstName: 'Pham', lastName: 'Mai' },
        { id: '720', firstName: 'Nguyen', lastName: 'Hoang' },
        { id: '727', firstName: 'Pham', lastName: 'Vinh' },
        { id: '722', firstName: 'Nguyen', lastName: 'Hai' },
        { id: '723', firstName: 'Tran', lastName: 'Trung' },
    ];



    public static checkExistedEmail(object: any): boolean {
        return object === 'anhnt.kma@gmail.com';
    }

    public static checkExistedPhone(object: any): boolean {
        if (object === '0934567890') {
            return true;
        } else {
            return false;
        }

    }

    addConfig(abc: any) {
        this.lConfig.push(abc);
    }

    public getUsersByPageNumberAndRecordNumber(currentPage, recordNumber) {
        const dataItem = this.data.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.data.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.data.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }

    public getLconfigPageNumberAndRecordNumber(currentPage, recordNumber) {
        const lConfig = this.lConfig.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
        console.log(lConfig)
        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: lConfig
        }];
        return of(result);
    }

    public sortPaymentPartner(currentPage, recordNumber, columnName, asc) {
        if (asc) {
            this.lConfig.sort((a, b) => a[columnName].localeCompare(b[columnName]));
        } else {
            this.lConfig.sort((a, b) => b[columnName].localeCompare(a[columnName]));
        }
        const dataItem = this.lConfig.slice((currentPage - 7) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }

    public getUsersSortByColumnNameAsc(currentPage, recordNumber, columnName) {
        this.data.sort((a, b) => a[columnName].localeCompare(b[columnName]));
        const dataItem = this.data.slice((currentPage - 7) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.data.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.data.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }

    public getUsersSortByColumnNameDesc(currentPage, recordNumber, columnName) {
        this.data.sort((a, b) => b[columnName].localeCompare(a[columnName]));
        const dataItem = this.data.slice((currentPage - 7) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.data.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.data.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }

    public removeListUser(listObject, currentPage, recordNumber) {
        for (const removeUser of listObject) {
            this.data = this.data.filter((user) => {
                return user.id !== removeUser.id;
            });
        }
        const dataItem = this.data.slice((currentPage - 7) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.data.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.data.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }


    getDataTable(): object {
        return this.dataTable;
    }

    getSearchTable(): object {
        return this.searchArr;
    }

    deleteLconfig(item, currentPage, recordNumber) {
        let indexItem: any;
        for (const index in this.lConfig) {
            if (this.lConfig[index].id === item.id) {
                indexItem = index;
                break;
            }
        }
        this.lConfig.splice(indexItem, 1);
        const lConfig = this.lConfig.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: lConfig
        }];
        return of(result);
    }

    getListConfig() {
        return this.lConfig;
    }

    addLconfig(abc: any, currentPage, recordNumber) {
        this.lConfig.unshift(abc);
        const lConfig = this.lConfig.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: lConfig
        }];
        return of(result);
    }

    public removeListConfig(listObject, currentPage, recordNumber) {
        for (const removeConfig of listObject) {
            this.lConfig = this.lConfig.filter((lconfig) => {
                return lconfig.id !== removeConfig.id;
            });
        }
        const dataItem = this.lConfig.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: dataItem
        }];
        return of(result);
    }

    public advanceSearch(LPAy, nCCDV, userDev, currentPage, recordNumber) {
        this.resetData();
        this.lConfig = this.lConfig.filter(item => {
            if ((LPAy === '' || item.lPay === LPAy) && (nCCDV === '' || (item.nCCDV.toLowerCase().indexOf(nCCDV.toLowerCase()) > -1))
                && (userDev === '' || (item.userDev.toLowerCase().indexOf(userDev.toLowerCase()) > -1))) {
                return true;
            } else {
                return false;
            }
        });

        const totalPage = Math.ceil(this.lConfig.length / recordNumber);
        const result = [{
            itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
            pageNumber: currentPage, pageSize: totalPage, data: this.lConfig
        }];
        return of(result);
    }

    public advanceSearch1(LPAy, nCCDV, userDev) {
        this.resetData();
        this.p = [];
        debugger
        this.lConfig = this.lConfig.filter(item => {
            if ((LPAy === '' || item.lPay === LPAy) && (nCCDV === '' || (item.nCCDV.toLowerCase().indexOf(nCCDV.toLowerCase()) > -1))
                && (userDev === '' || (item.userDev.toLowerCase().indexOf(userDev.toLowerCase()) > -1))) {
                this.p.push(item);
                return true;
            } else {
                return false;
            }
        });
        this.lConfig = this.p;
        return of(this.p);
    }

    private resetData() {
        // this.lConfig = [
        //     {
        //         id: 1, nCCDVCode: '012945668',
        //         nCCDV: 'CGV', confirm: false,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 2, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Hoàng Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 3, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 4, nCCDVCode: '012345668',
        //         nCCDV: 'Lotte', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 5, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 6, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 7, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 8, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 9, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 10, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'Mobi',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 11, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 12, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     },
        //     {
        //         id: 13, nCCDVCode: '012345668',
        //         nCCDV: 'CGV', confirm: true,
        //         lPay: 'ViettelPay',
        //         staffPhone: '0943170675',
        //         bossPhone: '0346157556',
        //         userDev: 'Trần Linh',
        //         province: 'Ha Noi',
        //         kind: 'Loại 1',
        //         timeTraining: '25/6/2019',
        //         timeAccept: '25/12/2019'
        //     }
        // ];
    }




}
