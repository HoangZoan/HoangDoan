function BoxShadowContainer({ style, children, Component = "div" }) {
  return (
    <Component style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.08)", ...style }}>
      {children}
    </Component>
  );
}

function FormField(props) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div className="input-title">{props.title}</div>

      {props.children}
    </div>
  );
}

function NumberInput(props) {
  return (
    <BoxShadowContainer style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          width: "40px",
          backgroundColor: "var(--color-primary)",
        }}
      >
        {props.icon}
      </div>
      <input type="number" style={{ flex: "1" }} />
    </BoxShadowContainer>
  );
}

function Select(props) {
  return (
    <BoxShadowContainer
      Component="select"
      style={{
        width: "100%",
        height: "40px",
        paddingLeft: "8px",
        fontWeight: "600",
        color: "#645D5D",
      }}
    >
      <option value="">choose...</option>
      {props.data.map(({ value, title }) => (
        <option key={value} value={value}>
          {value} - {title}
        </option>
      ))}
    </BoxShadowContainer>
  );
}

function Divider({ style }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        height: "1px",
        width: "100%",
        ...style,
      }}
    ></div>
  );
}

const selectOptions = [
  { value: "30%", title: "Outstanding" },
  { value: "20%", title: "Good" },
  { value: "15%", title: "It's OK" },
  { value: "10%", title: "Bad" },
  { value: "5%", title: "Terrible" },
];

function App() {
  return (
    <div className="background">
      <div className="calculator-box">
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
          Tip Calculator
        </h1>

        <Divider style={{ marginBottom: "18px" }} />

        <FormField title="Bill amount">
          <NumberInput
            icon={
              <i className="input-icon" class="fa-solid fa-money-bills"></i>
            }
          />
        </FormField>

        <FormField title="Number of guests">
          <NumberInput
            icon={<i className="input-icon" class="fa-solid fa-user-group"></i>}
          />
        </FormField>

        <FormField title="Service Quality">
          <Select data={selectOptions} />
        </FormField>

        <Divider style={{ marginTop: "12px" }} />

        <div style={{ textAlign: "center", marginTop: "18px" }}>
          <p style={{ marginBottom: "8px" }}>
            Tip <strong>$12.34</strong> each person
          </p>

          <button class="submit-button">Calculate</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
