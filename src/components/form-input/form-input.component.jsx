import { FormInputLabel, Input, Group } from './form-input.styles.jsx';

const formInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {
                label && (
                    <FormInputLabel shrink={otherProps.value.length}>
                        {label}
                    </FormInputLabel>)}
        </Group >
    )
}
export default formInput;