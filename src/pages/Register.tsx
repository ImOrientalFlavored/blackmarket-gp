import { Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import LoadingButton from '@mui/lab/LoadingButton';
import { signUpSchema } from "~lib/zod/schema/signUpFormSchema.types";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import registerUser from "~front_api/routes/register";

export default function Register(){

    const defaultValues = {
        email: "",
        username: "",
        password: "",
    }

    type TSignUp = TypeOf<typeof signUpSchema>;
    const methods = useForm<TSignUp>({
        resolver: zodResolver(signUpSchema),
        defaultValues
    });

    const { 
            handleSubmit,
            register, 
            formState:{errors, isSubmitting, isLoading},
            //getValues,
            //reset,
            //control:{ email, username, password }
        } = methods;
    
    const onSubmit = async (data:TSignUp) => {
        console.log("isSubmitting", isSubmitting);
        const token = await registerUser(data);
        console.log(token);
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
                            Register an Account
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
                                            variant="standard"
                                            type="email"
                                            label="Email Address"
                                            focused
                                            color = {!errors.email ? "success" : "error"}
                                            {...register('email')}
                                            sx={{
                                                
                                            }}
                                            error={
                                                !!errors.email 
                                            }
                                            helperText={
                                                errors.email? errors.email?.message : ''
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="Username"
                                            focused
                                            color = {!errors.username ? "success" : "error"}
                                            {...register('username')}
                                            error={!!errors.username }
                                            helperText={
                                                errors.username? errors.username?.message : ''
                                            }
                                        />
                                        
                                        <TextField
                                            type="password"
                                            label="Password"
                                            focused
                                            color = {!errors.password ? "success" : "error"}
                                            {...register('password')}
                                            error={!!errors.password}
                                            helperText={
                                                errors.password? errors.password?.message : ''
                                            }
                                        />
                                    </Stack>

                                    <LoadingButton
                                        //{...register("")}
                                        
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
                                        SignUp
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