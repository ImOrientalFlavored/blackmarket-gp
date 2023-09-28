import { Box, useMediaQuery } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Banner from "~components/layout/Banner";
import GridBox from "~components/layout/GridBox";
import PageSection from "~components/layout/PageSection";
import ProductCard from "~components/ui/ProductCard";
import SectionDivider from "~components/layout/SectionDivider";

export default function Index(){
    const { data } = useLoaderData() as {data:[]};
    const products = data;
    const matches = useMediaQuery('(min-width: 1024px)');
    let defaultSx = {
        //outline:"5px solid #a92222",
        gridTemplateColumns:"1fr 1fr 1fr",
        gridTemplateRows:"auto",
        columnGap:"2.5rem",
        rowGap:"10rem",
        marginY:"1rem",
        paddingInline:"3rem",
        paddingBlock:"10px",
        transition:"0.5s ease-in-out",
    }

    if (!matches){
        defaultSx = {
            //outline:"5px solid #a92222",
            gridTemplateColumns:"1fr 1fr",
            gridTemplateRows:"repeat(auto-fill, minmax(200px, 1fr))",
            columnGap:"2rem",
            rowGap:"8rem",
            marginY:".1rem",
            paddingInline:"30px",
            paddingBlock:"10px",
            transition:"0.3s ease-in-out",
        }
    }

    return(
        <Box sx={{}}>
            <Banner />
            <PageSection>
                <GridBox sx={defaultSx}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </GridBox>
                <GridBox sx={defaultSx}>
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </GridBox>
            </PageSection>
            <SectionDivider />
            <PageSection>
                <GridBox sx={defaultSx}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </GridBox>
                <GridBox sx={defaultSx}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </GridBox>
            </PageSection>
            <SectionDivider />
            <PageSection>
                <GridBox sx={defaultSx}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </GridBox>
            </PageSection>
            <SectionDivider />
        </Box>
    )
}