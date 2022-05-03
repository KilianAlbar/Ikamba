import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function Review({checkoutToken}){

    const { t } = useTranslation();

    return(
        <>
            <Typography variant="h6" gutterBottom>{t("OrderSummary")}</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product)=> (
                    <ListItem key={product.name}>
                        <ListItemText primary={product.name} secondary="Quantity: ${product.quantity}" />
                        <Typography variant="body2">{product.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="total" />
                </ListItem>
                <Typography variant="subtitle1">{checkoutToken.live.subtotal.formatted_with_symbol}</Typography>
            </List>
        </>
    )
}