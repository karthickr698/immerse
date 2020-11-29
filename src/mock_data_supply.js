import { data } from "./MOCK_DATA";
let masteryCount,
  autonomyCount,
  trustCount,
  purposeCount,
  wellbeingCount = 0;
let masteryValue,
  autonomyValue,
  trustValue,
  purposeValue,
  wellbeingValue = 0;

export const averageValue = (data) => {
  data.map((item, index) => {
    switch (item.name) {
      case "mastery":
        masteryValue += item.value;
        masteryCount++;
        break;
      case "autonomy":
        autonomyValue += item.value;
        autonomyCount++;
        break;
      case "trust":
        trustValue += item.value;
        trustCount++;
        break;
      case "purpose":
        purposeValue += item.value;
        purposeCount++;
        break;
      case "wellbeing":
        wellbeingValue += item.value;
        wellbeingCount++;
        break;
      default:
        break;
    }
    return [
      { type: "mastery", value: masteryValue / masteryCount },
      { type: "autonomy", value: autonomyValue / autonomyCount },
      { type: "trust", value: trustValue / trustCount },
      { type: "purpose", value: purposeValue / purposeCount },
      { type: "wellbeing", value: wellbeingValue / wellbeingCount },
    ];
  });
};

// let arrayOfObjects = [{name: "a", value: 1}, {name: "a", value: 2}, {name: "b", value: 1}]
// let result = {}
// arrayOfObjects.forEach(item => {
//     if(result[item.name]) {
//         result[item.name] = result[item.name] + item.value
//     } else {
//         result[item.name] = item.value
//     }
// })
