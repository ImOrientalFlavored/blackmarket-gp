import * as falso from '@ngneat/falso';
import { Address, Prisma } from '@prisma/client'



export class AddressService {
    constructor(private prisma) {

    }
    
    async create(data: Address): Promise<Address> {
        return this.prisma.address.create({
            data: {
                street: data.street,
                city: data.city,
                state: data.state,
                zip: data.zip,
                user: {
                    connect: {
                        id: data.user.id
                    }
                }
            }
        })
    }
    
    async findAll(): Promise<Address[]> {
        return this.prisma.address.findMany()
    }
    
    async findOne(id: number): Promise<Address> {
        return this.prisma.address.findUnique({
            where: {
                id: id
            }
        })
    }
    
    async update(id: number, data: Address): Promise<Address> {
        return this.prisma.address.update({
            where: {
                id: id
            },
            data: {
                street: data.street,
                city: data.city,
                state: data.state,
                zip: data.zip,
                user: {
                    connect: {
                        id: data.user.id
                    }
                }
            }
        })
    }

    async delete(id: number): Promise<Address> {
        return this.prisma.address.delete({
            where: {
                id: id
            }
        })
    }

    async findByUser(id: number): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                user: {
                    id: id
                }
            }
        })
    }

    async findByZip(zip: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip
            }
        })
    }

    async findByCity(city: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                city: city
            }
        })
    }
    
    async findByState(state: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                state: state
            }
        })
    }
    
    async findByStreet(street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                street: street
            }
        })
    }

    async findByZipAndCity(zip: string, city: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                city: city
            }
        })
    }

    async findByZipAndState(zip: string, state: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                state: state
            }
        })
    }

    async findByZipAndStreet(zip: string, street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                street: street
            }
        })
    }

    async findByZipAndCityAndState(zip: string, city: string, state: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                city: city,
                state: state
            }
        })
    }

    async findByZipAndCityAndStreet(zip: string, city: string, street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                city: city,
                street: street
            }
        })
    }

    async findByZipAndStateAndStreet(zip: string, state: string, street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                state: state,
                street: street
            }
        })
    }

    async findByZipAndCityAndStateAndStreet(zip: string, city: string, state: string, street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                city: city,
                state: state,
                street: street
            }
        })
    }

    async findByZipAndStateAndCity(zip: string, state: string, city: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                state: state,
                city: city
            }
        })
    }

    async findByZipAndStateAndCityAndStreet(zip: string, state: string, city: string, street: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                state: state,
                city: city,
                street: street
            }
        })
    }

    async findByZipAndStateAndStreetAndCity(zip: string, state: string, street: string, city: string): Promise<Address[]> {
        return this.prisma.address.findMany({
            where: {
                zip: zip,
                state: state,
                street: street,
                city: city
            }
        })
    }
}
