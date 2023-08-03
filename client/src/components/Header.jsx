
import { AppBar, Toolbar } from "@mui/material";   //to get the navbar from mui(Material UI)
import {styled} from "@mui/material";     // to style the components of mui
import {Menu} from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
    background: green;
    height: 70px;
    
`;

// const MenuIcon = styled(Menu)`
//     <-- give ur styling here -->
// `

// There is a special way to use styled with html tags like img or h1 bcoz they are not components like AppBar and Toolbar
// Like we pass the tags as strings enclosed under '' and to provide the style...
// ...write the style in the object format as used below 
const Image = styled('img')({
    height: 55,  //no need to specify units in case of object format
    margin: "auto",
    paddingRight: 70
});


const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <StyledHeader position="static">
            <Toolbar>
                <Menu/>
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;