import styled from "styled-components";

export default function Input({
  type,
  placeholder,
  setValue,
  notRequired,
  setMonth,
  setYear,
}) {
  if (type === "date") {
    return (
      <Date>
        <label>{placeholder}</label>
        <section>
          <select
            onChange={(e) => setMonth(e.target.value)}
            name="mes"
            required
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select onChange={(e) => setYear(e.target.value)} name="ano" required>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
          </select>
        </section>
      </Date>
    );
  }

  return (
    <Wrapper
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      required={notRequired ? false : true}
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  height: 35px;
  padding-left: 10px;
  border-radius: 14px;
  background-color: white;
  font-size: 16px;

  border: none;
  outline: none;
  ::placeholder {
    color: rgba(100, 100, 100, 1);
  }
`;

const Date = styled.div`
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 14px;
  background-color: white;
  font-size: 16px;

  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: rgba(160, 160, 160, 1);
    font-weight: 400;
    font-size: 16px;
  }

  section {
    display: flex;
    gap: 5px;
  }

  select {
    border: none;
    border-radius: 4px;
    background-color: black;
    color: white;
  }
`;
