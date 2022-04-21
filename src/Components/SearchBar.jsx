import { useState } from "react";
import { Paper, TextField } from "@mui/material";

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = ({target}) => setSearchTerm(target.value);
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }

    return (
        <Paper elevation={6} styling={{ padding: "25px" }}>
            <TextField
                fullWidth
                label = "Search..."
                value = {searchTerm}
                onChange = {handleChange}
                onKeyPress = {onKeyPress}
            />
        </Paper>
    )
}

export default SearchBar;