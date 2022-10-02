import { useForm } from "react-hook-form";
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPlotsLands() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <div>


<div><form    onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-6 m-auto">
       
       
        <div class="input-group mb-3">

        <div class="input-group mt-3 mb-3">
        <Box sx={{ minWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel    id="demo-simple-select-label">Type</InputLabel>
        <Select   {...register("type")}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="type"
        
        >
          <MenuItem value='Sale'>For Sale</MenuItem>
          <MenuItem value='Rent'>For Rent</MenuItem>
    
        </Select>
      </FormControl>
    </Box>

</div>

</div>


<div class="input-group mb-3">


<Box sx={{ minWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Listed by</InputLabel>
        <Select  {...register("ownTyp")}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Listed by"
        
        >
          <MenuItem value='B'>Builder</MenuItem>
          <MenuItem value='D'>Dealer</MenuItem>
          <MenuItem value='O'>Owner</MenuItem>

        </Select>
      </FormControl>
    </Box>


</div>


 



   <div className="input-group mb-3">
 
   <TextField   {...register("area")}  fullWidth id="outlined-basic" label="Plot & Land Area " variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">ft2</InputAdornment>,
          }} />

</div>

<div className="input-group mb-3">

<TextField  {...register("length")} fullWidth id="outlined-basic" label="Plot & Land Length " variant="outlined" 
          InputProps={{
            startAdornment: <InputAdornment position="start">ft</InputAdornment>,
          }}/>

</div>

<div className="input-group mb-3">
<TextField   {...register("width")}  fullWidth id="outlined-basic" label="Plot & Land Width" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">ft</InputAdornment>,
          }} />

</div>

<div className="input-group mb-3">
 
<TextField  {...register("price" )} fullWidth id="outlined-basic" label="Plot & Land Pricing" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
          }} />

</div>

<div className="input-group mb-3">

  <TextField   {...register("pname")} fullWidth id="outlined-basic" label="Project Name" variant="outlined" />

</div>


<div class="input-group mb-3">





<Box sx={{ minWidth: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Facing</InputLabel>
        <Select  {...register("face")}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
    
          label="Facing"
        
        >
          <MenuItem value='East'>East</MenuItem>
          <MenuItem value='North'>North</MenuItem>
          <MenuItem value='NE'>North-East</MenuItem>
          <MenuItem value="NW">North-West</MenuItem>
          <MenuItem value='South'>South</MenuItem>
          <MenuItem value='SW'>South-West</MenuItem>
          <MenuItem value="SE">South-East</MenuItem>
          <MenuItem value="West">West</MenuItem>



        </Select>
      </FormControl>
    </Box>


</div>










<div className="input-group mb-3">
 
<TextField  {...register("title")} fullWidth id="outlined-basic" label="Enter Ad Title" variant="outlined" />


</div>
<div className="input-group mb-3">

  <textarea  {...register("des")}  placeholder='Describe what you are selling' className="form-control mb-5" aria-label="Default" aria-describedby="inputGroup-sizing-default" ></textarea>
</div>


<button type="submit" class="btn btn-primary fixed-bottom  ">save</button>:
 {/* <button type="button" class="btn btn-success fixed-bottom  ">Next</button> */}




        </div>

</form>






    </div>







    </div>
  )
}

export default AddPlotsLands