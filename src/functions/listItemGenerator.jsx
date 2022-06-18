import React from "react";
import ListItem from "../components/listitem";

const listItemGenerator = (arr) => {
    return arr.map((el, index) => {
        return (
            <ListItem
                key={index}
                name={el.name}
                cost={el.cost}
                category={el.category}
                phase={el.phase}
                text={el.text}
                keywords={el.keywords}
            />
        );
    });
};

export default listItemGenerator