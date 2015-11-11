"use strict";

var topics = [
  {
  "nextJobTitle": "consultant",
  "frequency": 343,
  "frequencyPercent": 14.017163874131588,
  "nationalJobCount": 43263,
  "medianSalary": 77000
  },
  {
  "nextJobTitle": "senior analyst",
  "frequency": 303,
  "frequencyPercent": 12.38250919493257,
  "nationalJobCount": 50016,
  "medianSalary": 75000
  },
  {
  "nextJobTitle": "associate",
  "frequency": 263,
  "frequencyPercent": 10.747854515733552,
  "nationalJobCount": 179184,
  "medianSalary": 90000
  },
  {
  "nextJobTitle": "intern",
  "frequency": 244,
  "frequencyPercent": 9.971393543114017,
  "nationalJobCount": 13729,
  "medianSalary": 40000
  },
  {
  "nextJobTitle": "manager",
  "frequency": 204,
  "frequencyPercent": 8.336738863914999,
  "nationalJobCount": 90853,
  "medianSalary": 90303
  },
  {
  "nextJobTitle": "business analyst",
  "frequency": 201,
  "frequencyPercent": 8.214139762975071,
  "nationalJobCount": 73024,
  "medianSalary": 60507
  },
  {
  "nextJobTitle": "programmer",
  "frequency": 161,
  "frequencyPercent": 6.579485083776053,
  "nationalJobCount": 38895,
  "medianSalary": 60000
  },
  {
  "nextJobTitle": "financial analyst",
  "frequency": 133,
  "frequencyPercent": 5.435226808336739,
  "nationalJobCount": 50016,
  "medianSalary": 60000
  },
  {
  "nextJobTitle": "project manager",
  "frequency": 116,
  "frequencyPercent": 4.740498569677156,
  "nationalJobCount": 90853,
  "medianSalary": 85000
  },
  {
  "nextJobTitle": "software engineer",
  "frequency": 94,
  "frequencyPercent": 3.8414384961176955,
  "nationalJobCount": 84202,
  "medianSalary": 75566
  },
  {
  "nextJobTitle": "vice president",
  "frequency": 87,
  "frequencyPercent": 3.555373927257867,
  "nationalJobCount": 18100,
  "medianSalary": 135000
  },
  {
  "nextJobTitle": "research assistant",
  "frequency": 84,
  "frequencyPercent": 3.43277482631794,
  "nationalJobCount": 13689,
  "medianSalary": 34000
  },
  {
  "nextJobTitle": "senior consultant",
  "frequency": 72,
  "frequencyPercent": 2.942378422558235,
  "nationalJobCount": 43263,
  "medianSalary": 96000
  },
  {
  "nextJobTitle": "summer analyst",
  "frequency": 72,
  "frequencyPercent": 2.942378422558235,
  "nationalJobCount": 2410,
  "medianSalary": 60000
  },
  {
  "nextJobTitle": "systems analyst",
  "frequency": 70,
  "frequencyPercent": 2.8606456885982836,
  "nationalJobCount": 73024,
  "medianSalary": 60000
  }
];

var salaries = [];
for (var i = 0; i < topics.length; i++) {
  var data = [
    {
      name : 'nextJobTitle',
      val : topics[i].nextJobTitle
    },
    {
      name : 'frequency',
      val : topics[i].frequency
    },
    {
      name : 'frequencyPercent',
      val : topics[i].frequencyPercent
    },
    {
      name : 'nationalJobCount',
      val : topics[i].nationalJobCount
    },
    {
      name : 'medianSalary',
      val : topics[i].medianSalary
    },
    {
      name : 'testName',
      val : 'testVal'
    }
  ];
  salaries.push(data);
}

module.exports = salaries;