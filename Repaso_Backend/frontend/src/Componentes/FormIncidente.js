
import { Select } from 'react-materialize';
export const FormIncidente = () => {
  return (
    <>
      <h2>Form incidente</h2>
      <form className="col s12">
        <Select
          id="Select-36"
          multiple={false}
          onChange={function noRefCheck() { }}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value=""
        >
          <option
            disabled
            value=""
          >
            Choose your option
          </option>
          <option value="1">
            Option 1
          </option>
          <option value="2">
            Option 2
          </option>
          <option value="3">
            Option 3
          </option>
        </Select>
      </form>

    </>
  )
}
