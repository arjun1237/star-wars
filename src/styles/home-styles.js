import styled from 'styled-components'

const SearchUtilsWrapper = styled.div`
    .searchUtilDisplay{
        display: ${props => props.display === "true" ? "block" : "none"};
    }
`

export {SearchUtilsWrapper}