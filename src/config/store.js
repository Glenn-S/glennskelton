// https://www.google.com/search?rlz=1C1CHBF_enCA867CA867&sxsrf=ALeKk03qsZbYJRVVGXbpMhu2EwiOKwWeRw%3A1583115120509&ei=cGtcXtfgHp_O0PEPrM2M6AY&q=how+to+persist+state+in+react%2Fredux&oq=how+to+persist+state+in+react%2Fredux&gs_l=psy-ab.3..33i22i29i30.6424.14526..14686...0.1..0.306.3277.29j5j0j1......0....1..gws-wiz.......0i71j35i39j0i67j0i273j0i131j0j0i22i30.NK3FsnltqGY&ved=0ahUKEwjX2JWz2_rnAhUfJzQIHawmA20Q4dUDCAs&uact=5#kpvalbx=_C2xcXo2QL-e-0PEPr7ubyAY26

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined; // redux expects undefined or a value, not null
  }
};
