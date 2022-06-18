import React from "react";
import Button from "../components/button";


const buttonGenerator = (cost, callback, name) => {
    if (cost === '1/2') {
        return (
            <>
                <Button
                    name={`1 CP`}
                    onClick={() => {
                        callback(name, 1);
                    }}
                />
                <Button
                    name={`2 CP`}
                    onClick={() => {
                        callback(name, 2);
                    }}
                />
            </>
        );
    } else {
        return (
            <Button
                name={`${cost} CP`}
                onClick={() => {
                    callback(name, cost);
                }}
            />
        );
    }
};

export default buttonGenerator