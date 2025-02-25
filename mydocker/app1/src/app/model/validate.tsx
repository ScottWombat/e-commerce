import Ajv from 'ajv';
import schema from './order_schema.json';
const ajv = new Ajv({allErrors:true})





export const validate_order =(data)=>{
    const valid = ajv.validate(schema, data)
    let errors={};
    if (!valid) {
        let fields = [];
        ajv.errors.forEach((error)=>{
            //errors.push(error.params['missingProperty'])
            fields.push(error.params['missingProperty'])
            errors[error.instancePath.substring(1)]= Object.assign([],fields)
        })
    }else{
        console.log("Json Valid")
    }
    return errors;
}

