import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

const SIMPLE_TREE = [
    {
        id: 1,
        text: "学校",
        treeheight: 1,
        enableclick: true,
        co: true,
        addChild: false,
        children: [
            {
                id: 2,
                text: "计算机系",
                treeheight: 2,
                enableclick: true,
                co:true,
                children: [
                    {
                        id: 6,
                        text: "一班",
                        treeheight: 3,
                        enableclick: true,
                    },{
                        id: 7,
                        text: "二班",
                        treeheight: 3,
                        enableclick: true,
                    },{
                        id: 8,
                        text: "三班",
                        treeheight: 3,
                        enableclick: true,
                    }
                ]
            },{
                id: 4,
                text: "经济系",
                treeheight: 2,
                co:true,
                enableclick: true,
            }
        ]
    },{
        id: 3,
        text: "医院",
        treeheight: 1,
        enableclick: true,
        co: false,
        children: [
            {
                id: 5,
                text: "计算机系",
                treeheight: 2,
                enableclick: true,
            }
        ]
    }
];
// 右键菜单的数据
const MENU_DATA = [{
    text:"添加",
    clickFn:function(){
        console.log("添加");
        
    }
},{
    text:"删除",
    clickFn:function(){
        console.log("删除");
    }
},{
    text:"修改",
    clickFn:function(){
        console.log("修改");
    }
},];


@Injectable()
export class SimpleTreeService {

    getASimpleTree(){
        return SIMPLE_TREE;
    }
    getMenuData(){
        return MENU_DATA;
    }
    // 异步promise
    getTreeData(): Promise<any>{
        return Promise.resolve(SIMPLE_TREE);
    }
} 
