import React, { useEffect, useState } from "react";
import { Checkbox, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import _ from "lodash";

const ArrayFormat = () => {
  const [query, setQuery] = useState("");

  const Categories = [
    {
      CategoryID: 1,
      SubCategoryID: 1,
      Category: "Home & Utilities",
      SubCategoryName: "Mortgage & rent",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 2,
      Category: "Home & Utilities",
      SubCategoryName: "Body corporate fees",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 3,
      Category: "Home & Utilities",
      SubCategoryName: "Council rates",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 4,
      Category: "Home & Utilities",
      SubCategoryName: "Furniture & appliances",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 5,
      Category: "Home & Utilities",
      SubCategoryName: "Renovations & maintenance",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 6,
      Category: "Home & Utilities",
      SubCategoryName: "Electricity",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 7,
      Category: "Home & Utilities",
      SubCategoryName: "Gas",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 8,
      Category: "Home & Utilities",
      SubCategoryName: "Water",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 9,
      Category: "Home & Utilities",
      SubCategoryName: "Internet",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 10,
      Category: "Home & Utilities",
      SubCategoryName: "Pay TV",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 11,
      Category: "Home & Utilities",
      SubCategoryName: "Home phone",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 12,
      Category: "Home & Utilities",
      SubCategoryName: "Mobile",
      checked: false,
    },
    {
      CategoryID: 1,
      SubCategoryID: 13,
      Category: "Home & Utilities",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 26,
      Category: "Groceries",
      SubCategoryName: "Supermarket",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 27,
      Category: "Groceries",
      SubCategoryName: "Butcher",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 28,
      Category: "Groceries",
      SubCategoryName: "Fruit & veg market",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 29,
      Category: "Groceries",
      SubCategoryName: "Fish shop",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 30,
      Category: "Groceries",
      SubCategoryName: "Deli & bakery",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 31,
      Category: "Groceries",
      SubCategoryName: "Pet food",
      checked: false,
    },
    {
      CategoryID: 2,
      SubCategoryID: 32,
      Category: "Groceries",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 33,
      Category: "Personal & Medical",
      SubCategoryName: "Cosmetics & toiletries",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 34,
      Category: "Personal & Medical",
      SubCategoryName: "Hair & beauty",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 35,
      Category: "Personal & Medical",
      SubCategoryName: "Medicines & pharmacy",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 36,
      Category: "Personal & Medical",
      SubCategoryName: "Glasses & eye care",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 37,
      Category: "Personal & Medical",
      SubCategoryName: "Dental",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 38,
      Category: "Personal & Medical",
      SubCategoryName: "Doctors & medical",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 39,
      Category: "Personal & Medical",
      SubCategoryName: "Hobbies",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 40,
      Category: "Personal & Medical",
      SubCategoryName: "Clothing & shoes",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 41,
      Category: "Personal & Medical",
      SubCategoryName: "Jewellery & accessories",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 42,
      Category: "Personal & Medical",
      SubCategoryName: "Computers & gadgets",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 43,
      Category: "Personal & Medical",
      SubCategoryName: "Sports & gym",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 44,
      Category: "Personal & Medical",
      SubCategoryName: "Education",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 45,
      Category: "Personal & Medical",
      SubCategoryName: "Pet care & vet",
      checked: false,
    },
    {
      CategoryID: 3,
      SubCategoryID: 46,
      Category: "Personal & Medical",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 47,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Coffee & tea",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 48,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Lunches - bought",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 49,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Take-away & snacks",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 50,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Cigarettes",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 51,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Drinks & alcohol",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 52,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Bars & clubs",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 53,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Restaurants",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 54,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Books",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 55,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Newspaper & magazines",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 56,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Movies & music",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 57,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Holidays",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 58,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Celebrations & gifts",
      checked: false,
    },
    {
      CategoryID: 4,
      SubCategoryID: 59,
      Category: "Entertainment & Eat-out",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 60,
      Category: "Transport & Auto",
      SubCategoryName: "Bus & train & ferry",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 61,
      Category: "Transport & Auto",
      SubCategoryName: "Petrol",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 62,
      Category: "Transport & Auto",
      SubCategoryName: "Road tolls & parking",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 63,
      Category: "Transport & Auto",
      SubCategoryName: "Rego & licence",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 64,
      Category: "Transport & Auto",
      SubCategoryName: "Repairs & maintenance",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 65,
      Category: "Transport & Auto",
      SubCategoryName: "Fines",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 66,
      Category: "Transport & Auto",
      SubCategoryName: "Airfares",
      checked: false,
    },
    {
      CategoryID: 5,
      SubCategoryID: 67,
      Category: "Transport & Auto",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 68,
      Category: "Children",
      SubCategoryName: "Baby products",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 69,
      Category: "Children",
      SubCategoryName: "Toys",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 70,
      Category: "Children",
      SubCategoryName: "Babysitting",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 71,
      Category: "Children",
      SubCategoryName: "Childcare",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 72,
      Category: "Children",
      SubCategoryName: "Sports & activities",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 73,
      Category: "Children",
      SubCategoryName: "School fees",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 74,
      Category: "Children",
      SubCategoryName: "Excursions",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 75,
      Category: "Children",
      SubCategoryName: "School uniforms",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 76,
      Category: "Children",
      SubCategoryName: "Other school needs",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 77,
      Category: "Children",
      SubCategoryName: "Child support payment",
      checked: false,
    },
    {
      CategoryID: 6,
      SubCategoryID: 78,
      Category: "Children",
      SubCategoryName: "Other",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 14,
      Category: "Insurance & Financial",
      SubCategoryName: "Car insurance",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 15,
      Category: "Insurance & Financial",
      SubCategoryName: "Home & contents insurance",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 16,
      Category: "Insurance & Financial",
      SubCategoryName: "Personal & life insurance",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 17,
      Category: "Insurance & Financial",
      SubCategoryName: "Health insurance",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 18,
      Category: "Insurance & Financial",
      SubCategoryName: "Car loan",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 19,
      Category: "Insurance & Financial",
      SubCategoryName: "Credit card interest",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 20,
      Category: "Insurance & Financial",
      SubCategoryName: "Other loans",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 21,
      Category: "Insurance & Financial",
      SubCategoryName: "Paying off debt",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 22,
      Category: "Insurance & Financial",
      SubCategoryName: "Savings",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 23,
      Category: "Insurance & Financial",
      SubCategoryName: "Investments & super contributions",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 24,
      Category: "Insurance & Financial",
      SubCategoryName: "Charity donations",
      checked: false,
    },
    {
      CategoryID: 7,
      SubCategoryID: 25,
      Category: "Insurance & Financial",
      SubCategoryName: "Other",
      checked: false,
    },
  ];

  const [data, setData] = useState(Categories);
  const [search, setSearch] = useState([]);
  const [myKeys, setMyKeys] = useState();
  const [dataGroup, setDataGroup] = useState();

  // useEffect(() => {
  //   data && setDataGroup(data);
  // }, [data]);

  // Checkbox
  const handleChange = (event, id) => {
    event.preventDefault();

    var selectedID = data.filter((item) => item.SubCategoryID === id);

    var loopedVal = data.map((item) => {
      if (item.SubCategoryID === id) {
        return {
          ...item,
          checked: selectedID[0].checked === true ? false : true,
        };
      } else {
        return item;
      }
    });

    var finalArrData = loopedVal.filter((item) => item.checked === true);

    console.log("finalArrData", finalArrData);

    setData(loopedVal);
  };

  //Search
  const onSearch = (e) => {
    let value = e.target.value;
    setQuery(value);
    let groupedData1 = _.groupBy(Categories, "Category");

    var dtGroup = dataGroup;

    {
      myKeys &&
        myKeys.map((arr) => {
          var filterInfo = groupedData1[arr].filter((item) => {
            if (e.target.value === "") {
              return item;
            } else if (item.SubCategoryName.toLowerCase().includes(value?.toLowerCase())) {
              return item;
            }
          });

          dtGroup = { ...dtGroup, [arr]: filterInfo };
        });
    }
    setDataGroup(dtGroup);
  };

  useEffect(() => {
    let groupedData = _.groupBy(Categories, "Category");

    setDataGroup(groupedData);
    var keys = Object.keys(groupedData);
    console.log("USE EFFECT", groupedData);
    setMyKeys(keys);
  }, []);

  return (
    <DashboardLayout>
      <Card>
        <Box sx={{ margin: "0 auto" }}>
          <Typography variant="h4" m={2}>
            Array Format
          </Typography>
        </Box>
        <Box sx={{ margin: "0 auto", marginBottom: "16px" }}>
          <TextField
            value={query}
            label="Search..."
            variant="outlined"
            onChange={(e) => onSearch(e)}
          />
        </Box>
        <Box sx={{ margin: "0 auto", marginBottom: "16px", marginTop: "10px" }}>
          <table style={{ width: "100%", textAlign: "center" }}>
            <tbody>
              <tr>
                <>
                  {myKeys &&
                    myKeys.map((arr) => {
                      return (
                        <>
                          <tr>
                            <th>{arr}</th>
                          </tr>

                          <tr>
                            {dataGroup &&
                              dataGroup[arr] &&
                              dataGroup[arr].map((sub) => {
                                return (
                                  <tr>
                                    <td key={sub?.SubCategoryName}>{sub?.SubCategoryName}</td>
                                    <Checkbox
                                      onChange={(e) => handleChange(e, sub.SubCategoryID)}
                                    />
                                  </tr>
                                );
                              })}
                          </tr>
                        </>
                      );
                    })}
                  {/* <th>
                          {keys.map((item) => {
                            <tr>{item[0]}</tr>;
                          })}
                        </th> */}

                  {/* <th key={item?.CategoryID}>
                          {keys[item.Category]}
                          {item?.Category}
                          {groupData} 
                        </th>
                      </tr>

                      <tr>
                        <td key={item?.SubCategoryID}>{item?.SubCategoryName}</td>
                        <Checkbox onChange={(e) => handleChange(e, item.SubCategoryID)} />
                      </tr> */}
                </>
              </tr>
            </tbody>
          </table>
        </Box>
      </Card>
    </DashboardLayout>
  );
};;;;;;;;;;;

export default ArrayFormat;