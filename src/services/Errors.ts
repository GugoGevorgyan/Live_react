class Errors{
errors = {};
getErrors(){
return this.errors;
}
setErrors(response){
this.errors = response.data.errors;
}
getKey(key:string){
return(this.errors[key] !== undefined) ? this.errors[key] : null;
}
resert (){
    this.errors = {};
}
}
export default new Errors();