import React from 'react';

export interface IRoute {
    pathRota: string;
    component: React.FC<any>;
    nome: string;
    parametrosBreadcrumbs?: Array<string>;
    public?: boolean;
}

export interface IAppRoutes {
    [key: string]: IRoute;
}
