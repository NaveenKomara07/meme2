import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const GradientDirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  border: none;
  border-radius: 10px;
  height: 50px;
  outline: none;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  border-radius: 6px;
  font-size: 14px;
  background-color: #00c9b7;
  min-width: 25px;
  border: none;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 15px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  font-weight: 600;
`
