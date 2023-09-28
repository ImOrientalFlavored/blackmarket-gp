import { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import LoadingButton from '@mui/lab/LoadingButton';
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { checkoutModel } from "~lib/zod/schema/checkoutFormSchema";
export default function SignIn(){

    type TCheckout = z.infer<typeof checkoutModel>;



    const defaultValues:TCheckout = {
        street: "",
        unit: "",
        city: "",
        zipcode: "",
        state: "",
        country: "",
        paymentType: "CREDIT",
        cardDetails: {
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        }
    }

    const methods = useForm<TCheckout>({
        resolver: zodResolver(checkoutModel),
        defaultValues
    });

    const { 
            handleSubmit,
            register, 
            formState:{errors, isSubmitting, isLoading},
            //getValues,
            //reset,
            //control:{ email, street,  }
        } = methods;
    
    const onSubmit = async (data:TCheckout) => {
        console.log("isSubmitting", isSubmitting);
        console.log("isLoading", isLoading);
        new Promise(() => {
            setTimeout(() => {
        console.log(data);
        console.log(isSubmitting);
        console.log(isLoading);
            }, 2000);
        });
        console.log("isSubmitting", isSubmitting);
        console.log("isLoading", isLoading);
    }

    return (
        <Container
        maxWidth={false}
        sx={{ 
            //height: '100vh', 
            //outline:"1px solid white" 
        }}>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={{ 
                    height:'100%', 
                    width:"100%", 
                    //outline:"1px solid green" 
            }}>
                <Grid
                    sx={{ 
                        maxWidth: '70rem', 
                        width: '100%', 
                       // outline:"2px solid blue" 
                }}>
                    <FormProvider {...methods}>
                    <Grid
                        container
                        sx={{
                            boxShadow: { sm: '0 0 5px #ddd' },
                            py: '6rem',
                            px: '1rem',
                    }}>
                        <Typography
                            variant='h4'
                            component='h1'
                            sx={{
                            textAlign: 'center',
                            width: '100%',
                            mb: '1.5rem',
                            pb: { sm: '3rem' },
                            }}
                        >
                            Login
                        </Typography>
                        <Grid
                            item
                            container
                            justifyContent='space-between'
                            rowSpacing={5}
                            sx={{
                                maxWidth: { sm: '45rem' },
                                marginInline: 'auto',
                        }}>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                sx={{ 
                                    borderRight: { sm: '1px solid #ddd' },
                                    bgcolor:"#30303092"
                                }}
                            >
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    component='form'
                                    autoComplete='on'
                                    sx={{ paddingRight: { sm: '3rem' } }}
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Typography
                                    variant='h6'
                                    component='h1'
                                    sx={{ textAlign: 'center', mb: '1.5rem' }}
                                    >
                                    Create your new account
                                    </Typography>
                                    <Stack spacing={"1.5rem"} marginLeft={'1rem'}>

                                        <TextField
                                            type="text"
                                            label="street"
                                            focused
                                            color = {!errors.street ? "success" : "error"}
                                            {...register('street')}
                                            error={!!errors.street }
                                            helperText={
                                                errors.street? errors.street?.message : ''
                                            }
                                        />
                                        
                                        <TextField
                                            type="text"
                                            label="unit"
                                            focused
                                            color = {!errors.unit ? "success" : "error"}
                                            {...register('unit')}
                                            error={!!errors.unit}
                                            helperText={
                                                errors.unit? errors.unit?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="city"
                                            focused
                                            color = {!errors.city ? "success" : "error"}
                                            {...register('city')}
                                            error={!!errors.city}
                                            helperText={
                                                errors.city? errors.city?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="zipcode"
                                            focused
                                            color = {!errors.zipcode ? "success" : "error"}
                                            {...register('zipcode')}
                                            error={!!errors.zipcode}
                                            helperText={
                                                errors.zipcode? errors.zipcode?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="state"
                                            focused
                                            color = {!errors.state ? "success" : "error"}
                                            {...register('state')}
                                            error={!!errors.state}
                                            helperText={
                                                errors.state? errors.state?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="country"
                                            focused
                                            color = {!errors.country ? "success" : "error"}
                                            {...register('country')}
                                            error={!!errors.country}
                                            helperText={
                                                errors.country? errors.country?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="planet"
                                            focused
                                            color = {!errors.planet ? "success" : "error"}
                                            {...register('planet')}
                                            error={!!errors.planet}
                                            helperText={
                                                errors.planet? errors.planet?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="solarSystem"
                                            focused
                                            color = {!errors.solarSystem? "success" : "error"}
                                            {...register('solarSystem')}
                                            error={!!errors.solarSystem}
                                            helperText={
                                                errors.solarSystem? errors.solarSystem?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="galaxy"
                                            focused
                                            color = {!errors.galaxy ? "success" : "error"}
                                            {...register('galaxy')}
                                            error={!!errors.galaxy}
                                            helperText={
                                                errors.galaxy? errors.galaxy?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="localGroup"
                                            focused
                                            color = {!errors.localGroup ? "success" : "error"}
                                            {...register('localGroup')}
                                            error={!!errors.localGroup}
                                            helperText={
                                                errors.localGroup? errors.localGroup?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="localCluster"
                                            focused
                                            color = {!errors.localCluster ? "success" : "error"}
                                            {...register('localCluster')}
                                            error={!!errors.localCluster}
                                            helperText={
                                                errors.localCluster? errors.localCluster?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="universe"
                                            focused
                                            color = {!errors.universe ? "success" : "error"}
                                            {...register('universe')}
                                            error={!!errors.universe}
                                            helperText={
                                                errors.universe? errors.universe?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="cardNumber"
                                            focused
                                            color = {!errors.cardDetails?.cardNumber ? "success" : "error"}
                                            {...register('cardDetails.cardNumber')}
                                            error={!!errors.cardDetails?.cardNumber}
                                            helperText={
                                                errors.cardDetails?.cardNumber? errors.cardDetails?.cardNumber?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="cardHolderName"
                                            focused
                                            color = {!errors.cardDetails?.cardholderName ? "success" : "error"}
                                            {...register('cardDetails.cardholderName')}
                                            error={!!errors.cardDetails?.cardholderName}
                                            helperText={
                                                errors.cardDetails?.cardholderName? errors.cardDetails?.cardholderName?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="expiryDate"
                                            focused
                                            color = {!errors.cardDetails?.expiryDate ? "success" : "error"}
                                            {...register('cardDetails.expiryDate')}
                                            error={!!errors.cardDetails?.expiryDate}
                                            helperText={
                                                errors.cardDetails?.expiryDate? errors.cardDetails?.expiryDate?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="cvv"
                                            focused
                                            color = {!errors.cardDetails?.cvv ? "success" : "error"}
                                            {...register('cardDetails.cvv')}
                                            error={!!errors.cardDetails?.cvv}
                                            helperText={
                                                errors.cardDetails?.cvv? errors.cardDetails?.cvv?.message : ''
                                            }
                                        />
                                        {/* payment type */}
                                        {/* <TextField
                                            type="text"
                                            label=""
                                            focused
                                            color = {!errors. ? "success" : "error"}
                                            {...register('')}
                                            error={!!errors.}
                                            helperText={
                                                errors.? errors.?.message : ''
                                            }
                                        /> */}

                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size='small'
                                                    aria-label='trust this device checkbox'
                                                    //{...register('persistent')}
                                                    sx={{
                                                        color:"#d6d6d6",
                                                        '&.Mui-checked': {
                                                            color:"#909090"
                                                        }
                                                    }}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant='body2'
                                                    sx={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: 400,
                                                    color: '#d6d6d6',
                                                    }}
                                                >
                                                Use billing address as shipping address?
                                                </Typography>
                                        }
                                        />
                                    </Stack>

                                    <LoadingButton
                                        disabled={isSubmitting}
                                        loading={isLoading}
                                        type='submit'
                                        variant='outlined'
                                        sx={{
                                        py: '0.8rem',
                                        mt: 2,
                                        width: '80%',
                                        marginInline: 'auto',
                                        color: '#ffffff',
                                        '&:hover': {
                                            color: '#dddddd',
                                        }
                                    }}>
                                        Login
                                    </LoadingButton>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    </FormProvider>
                </Grid>
            </Grid>
        </Container>
    )
}