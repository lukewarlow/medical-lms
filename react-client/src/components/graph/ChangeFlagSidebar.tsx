import {Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";
import {useTranslation} from "react-i18next";
import {IChart, INode} from "@mrblenny/react-flow-chart/src";

export default function ChangeFlagSidebar({graph, selectedNode, rerender}: IChangeFlagSidebarProps) {
    const {t} = useTranslation();

    return (
        <div className="graph-sidebar-contents">
            <Form>
                <FormGroup>
                    <FormLabel>{t("name")}</FormLabel>
                    <FormControl type="text" defaultValue={selectedNode?.properties.name ?? ""}
                                 onChange={e => {
                                     selectedNode!!.properties.name = e.target.value;
                                     rerender();
                                 }}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>{t("value")}</FormLabel>
                    <FormControl type="value" defaultValue={selectedNode?.properties.value ?? ""}
                                 onChange={e => {
                                     selectedNode!!.properties.value = e.target.value;
                                     rerender();
                                 }}/>
                </FormGroup>
            </Form>
        </div>
    );
}

export interface IChangeFlagSidebarProps {
    graph: IChart;
    selectedNode: INode | null | undefined;
    rerender: Function;
}