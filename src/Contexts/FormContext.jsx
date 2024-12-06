import React, { createContext } from "react";

export const FormContext = createContext();

const FormProvider = ({children}) =>
{
    return (
        <div>
            <FormContext.Provider>
                {children}
            </FormContext.Provider>
        </div>
    )
};

export default FormProvider;