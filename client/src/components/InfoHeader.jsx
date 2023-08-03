import {styled} from "@mui/material";


const Container = styled('div')( ({theme}) => ( {
    backgroundColor: "red",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom : 45,
    [theme.breakpoints.down('md')] : {
        display : 'none'
    }
}));

const Text = styled('p')({
    marginLeft: 50
});

const Image = styled('img')({
    height: 34,
    marginRight: 20
});


const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text  >For the best user experience install inshorts</Text> 
            <div display="flex" >
                <Image src={appleStore} alt="logo" />
                <Image src={googleStore} alt="logo" />
            </div>
        </Container>
    )
}

export default InfoHeader;