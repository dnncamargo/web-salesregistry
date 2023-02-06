import Input from './Input';

const Address = ({AddressInput, ComplementInput, DistrictInput, cityInput, StateInput}) => {
    return (                     
    <div className="FormAddress">
                    <Input value={AddressInput} placeholder="Endereço" maxLength={50}/>
                    <Input value={ComplementInput} placeholder="Complemento" maxLength={50}/>
                    <Input value={DistrictInput} placeholder="Bairro" maxLength={50}/>
                    <Input value={cityInput} placeholder="Cidade" maxLength={50}/>
                    <Input value={StateInput} placeholder="UF" maxLength={2}/>
    </div>

     );
}
 
export default Address;