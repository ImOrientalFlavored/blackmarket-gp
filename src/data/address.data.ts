
import { Address } from "@prisma/client";
import falso from "@ngneat/falso";


const addresses: Partial<Address>[] = [
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
    {
        street: falso.randStreetAddress(),
        city: falso.randCity(),
        state: falso.randStateAbbr(),
        zipcode: falso.randZipCode(),
    },
]

export default addresses;