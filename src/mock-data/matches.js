const matches = [
  {
    id: "97b6d770-b0bf-45f7-8e82-5461eda8df7b",
    score: Number,
    createdAt: 1603342688819,
    verifyPhotoUrl: String, // use the actual URL for the photos you found!
    questions: [
      {
        id: "e7a226e4-3fdb-4230-8c6a-ef3889e6815b",
        title: "You identify as:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "d99130ed-8ed7-4927-980a-d6e8e3f4745b",
            text: "Female",
          },
          {
            id: "d1fa8858-4fb5-4a28-aaf9-02197425f5e4",
            text: "Male",
          },
        ],
        selectedAnswerIds: ["d1fa8858-4fb5-4a28-aaf9-02197425f5e4"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "2751a7dd-9c9a-4a26-88af-677df8bba6a5",
        title: "Looking for:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "3892b36a-8a64-443b-bb34-0d933885fc4f",
            text: "Female",
          },
          {
            id: "4b5ffbab-70e2-4ff7-9040-64d4fbe31ceb",
            text: "Male",
          },
        ],
        selectedAnswerIds: ["3892b36a-8a64-443b-bb34-0d933885fc4f"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "c01267de-4473-4454-adad-bd978e971595",
        title: "Relationship status:",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "367b63d4-f3b1-48f4-aca4-7cd67b80030a",
            text: "Never married",
          },
          {
            id: "currently-separated",
            text: "Currently separated",
          },
          {
            id: "6b9cab6d-ef37-4e93-a489-54e52393b8f0",
            text: "Divorced",
          },
          {
            id: "bfaacfe4-a715-4541-ae9d-2aa57b28aede",
            text: "Widowed",
          },
        ],
        selectedAnswerIds: ["367b63d4-f3b1-48f4-aca4-7cd67b80030a"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "a2dfe856-c8bc-44c8-be7b-a38e2c3329d9",
        title: "Would you like to have any/additional kids in the future?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "511b443a-59a0-4e0b-a408-e75244fa2486",
            text: "Yes",
          },
          {
            id: "becf4d45-4ddf-44c1-9ea5-22538f0ac948",
            text: "No",
          },
          {
            id: "0592557f-d0c1-4013-a1a8-4c888a73a477",
            text: "Maybe",
          },
        ],
        selectedAnswerIds: ["511b443a-59a0-4e0b-a408-e75244fa2486"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "3c8da21c-e09a-4085-8b49-db0cebb7bf7a",
        title: "How important is exercise or working out to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "53323386-fde9-4d54-9c13-a1ed359ffae4",
            text: "Not at all important",
          },
          {
            id: "d86f9fd5-3208-40fa-81c3-f541a426f52a",
            text: "Not really important",
          },
          {
            id: "8a566489-636b-47ac-9372-d0951d6b6dcb",
            text: "Somewhat important",
          },
          {
            id: "6e6e7314-0fb7-4275-9916-412af7feff41",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: ["8a566489-636b-47ac-9372-d0951d6b6dcb"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "e10023c2-472e-4003-a8c4-0e5fe2d0cf42",
        title:
          "How important is it for you to climb the ladder at your job and get promotions?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "c5a86aac-97da-4ceb-9c18-9337f82ad01b",
            text: "Not at all important",
          },
          {
            id: "a63de221-941f-4b43-a4a9-07a80f076176",
            text: "Not really important",
          },
          {
            id: "09feee2b-b4af-460e-862e-51bb62daa658",
            text: "Somewhat important",
          },
          {
            id: "ef92e6b3-31f2-41a8-bb38-a97b4170b83e",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: ["ef92e6b3-31f2-41a8-bb38-a97b4170b83e"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "0949f8f5-f84f-4df9-91ff-7260630c6eb9",
        title: "How important are your spiritual/religious beliefs to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "40c7b88f-185c-4acd-a9cf-6568823faf28",
            text: "Not at all important",
          },
          {
            id: "85f03a85-b079-4c32-b478-c22c1ef975d0",
            text: "Not really important",
          },
          {
            id: "f44a0f87-ba5e-4b2b-9478-280c808b29ea",
            text: "Somewhat important",
          },
          {
            id: "157f8c1c-456f-4fbd-ae17-3eb8e6692995",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: ["40c7b88f-185c-4acd-a9cf-6568823faf28"], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "fc386d71-8ef0-4661-894b-c193b3b5da44",
        title: "Which political topics are most important to you?",
        subtitle: "(Choose 2)",
        type: 2,
        limit: 2,
        answers: [
          {
            id: "7698f367-8aa0-4c62-9970-0115f359111e",
            text: "Not at all important",
          },
          {
            id: "7b7ca131-4d07-452d-a174-559259cd4b9d",
            text: "Not really important",
          },
          {
            id: "ab27e852-60e1-4ac7-9b62-b4e5b432ae75",
            text: "Somewhat important",
          },
          {
            id: "5073c312-508b-4af2-94f9-3462b70d7052",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "d479c412-0db9-42af-9702-308d5c016107",
        title: "Which religious beliefs are closest to your own?",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "979b9b27-f3d9-47df-93e2-2edb4057258a",
            text: "Atheist",
          },
          {
            id: "a86acabe-68ce-455d-9657-bdd05e2d1d77",
            text: "Spiritual but not religious",
          },
          {
            id: "c6755709-4844-4919-aec8-4748c223d7df",
            text: "Agnostic",
          },
          {
            id: "0c14060d-3b17-4c30-9501-18b833e0bda9",
            text: "Catholic",
          },
          {
            id: "4db711e1-0db8-4aad-9ce4-b5a06bec532e",
            text: "Christian / Protestant",
          },
          {
            id: "8c375574-4af3-4f3e-9068-fdbd5c000cc9",
            text: "Buddhist / Taoist",
          },
          {
            id: "e47ae986-93c3-43f2-b934-481424ef4405",
            text: "Hindu",
          },
          {
            id: "036ae449-ced1-41dc-a264-bc471347d996",
            text: "Muslim / Islam",
          },
          {
            id: "81b6b145-065c-4d48-984c-12fe52e08ecb",
            text: "Other",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
    ],
  },
  {
    id: "97b6d770-b0bf-45f7-8e82-5461eda8df7b",
    score: Number,
    createdAt: 1603342688819,
    verifyPhotoUrl: String, // use the actual URL for the photos you found!
    questions: [
      {
        id: "e7a226e4-3fdb-4230-8c6a-ef3889e6815b",
        title: "You identify as:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "d99130ed-8ed7-4927-980a-d6e8e3f4745b",
            text: "Female",
          },
          {
            id: "d1fa8858-4fb5-4a28-aaf9-02197425f5e4",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "2751a7dd-9c9a-4a26-88af-677df8bba6a5",
        title: "Looking for:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "3892b36a-8a64-443b-bb34-0d933885fc4f",
            text: "Female",
          },
          {
            id: "4b5ffbab-70e2-4ff7-9040-64d4fbe31ceb",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "c01267de-4473-4454-adad-bd978e971595",
        title: "Relationship status:",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "367b63d4-f3b1-48f4-aca4-7cd67b80030a",
            text: "Never married",
          },
          {
            id: "currently-separated",
            text: "Currently separated",
          },
          {
            id: "6b9cab6d-ef37-4e93-a489-54e52393b8f0",
            text: "Divorced",
          },
          {
            id: "bfaacfe4-a715-4541-ae9d-2aa57b28aede",
            text: "Widowed",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "a2dfe856-c8bc-44c8-be7b-a38e2c3329d9",
        title: "Would you like to have any/additional kids in the future?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "511b443a-59a0-4e0b-a408-e75244fa2486",
            text: "Yes",
          },
          {
            id: "becf4d45-4ddf-44c1-9ea5-22538f0ac948",
            text: "No",
          },
          {
            id: "0592557f-d0c1-4013-a1a8-4c888a73a477",
            text: "Maybe",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "3c8da21c-e09a-4085-8b49-db0cebb7bf7a",
        title: "How important is exercise or working out to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "53323386-fde9-4d54-9c13-a1ed359ffae4",
            text: "Not at all important",
          },
          {
            id: "d86f9fd5-3208-40fa-81c3-f541a426f52a",
            text: "Not really important",
          },
          {
            id: "8a566489-636b-47ac-9372-d0951d6b6dcb",
            text: "Somewhat important",
          },
          {
            id: "6e6e7314-0fb7-4275-9916-412af7feff41",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "e10023c2-472e-4003-a8c4-0e5fe2d0cf42",
        title:
          "How important is it for you to climb the ladder at your job and get promotions?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "c5a86aac-97da-4ceb-9c18-9337f82ad01b",
            text: "Not at all important",
          },
          {
            id: "a63de221-941f-4b43-a4a9-07a80f076176",
            text: "Not really important",
          },
          {
            id: "09feee2b-b4af-460e-862e-51bb62daa658",
            text: "Somewhat important",
          },
          {
            id: "ef92e6b3-31f2-41a8-bb38-a97b4170b83e",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "0949f8f5-f84f-4df9-91ff-7260630c6eb9",
        title: "How important are your spiritual/religious beliefs to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "40c7b88f-185c-4acd-a9cf-6568823faf28",
            text: "Not at all important",
          },
          {
            id: "85f03a85-b079-4c32-b478-c22c1ef975d0",
            text: "Not really important",
          },
          {
            id: "f44a0f87-ba5e-4b2b-9478-280c808b29ea",
            text: "Somewhat important",
          },
          {
            id: "157f8c1c-456f-4fbd-ae17-3eb8e6692995",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "fc386d71-8ef0-4661-894b-c193b3b5da44",
        title: "Which political topics are most important to you?",
        subtitle: "(Choose 2)",
        type: 2,
        limit: 2,
        answers: [
          {
            id: "7698f367-8aa0-4c62-9970-0115f359111e",
            text: "Not at all important",
          },
          {
            id: "7b7ca131-4d07-452d-a174-559259cd4b9d",
            text: "Not really important",
          },
          {
            id: "ab27e852-60e1-4ac7-9b62-b4e5b432ae75",
            text: "Somewhat important",
          },
          {
            id: "5073c312-508b-4af2-94f9-3462b70d7052",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "d479c412-0db9-42af-9702-308d5c016107",
        title: "Which religious beliefs are closest to your own?",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "979b9b27-f3d9-47df-93e2-2edb4057258a",
            text: "Atheist",
          },
          {
            id: "a86acabe-68ce-455d-9657-bdd05e2d1d77",
            text: "Spiritual but not religious",
          },
          {
            id: "c6755709-4844-4919-aec8-4748c223d7df",
            text: "Agnostic",
          },
          {
            id: "0c14060d-3b17-4c30-9501-18b833e0bda9",
            text: "Catholic",
          },
          {
            id: "4db711e1-0db8-4aad-9ce4-b5a06bec532e",
            text: "Christian / Protestant",
          },
          {
            id: "8c375574-4af3-4f3e-9068-fdbd5c000cc9",
            text: "Buddhist / Taoist",
          },
          {
            id: "e47ae986-93c3-43f2-b934-481424ef4405",
            text: "Hindu",
          },
          {
            id: "036ae449-ced1-41dc-a264-bc471347d996",
            text: "Muslim / Islam",
          },
          {
            id: "81b6b145-065c-4d48-984c-12fe52e08ecb",
            text: "Other",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
    ],
  },
  {
    id: "97b6d770-b0bf-45f7-8e82-5461eda8df7b",
    score: Number,
    createdAt: 1603342688819,
    verifyPhotoUrl: String, // use the actual URL for the photos you found!
    questions: [
      {
        id: "e7a226e4-3fdb-4230-8c6a-ef3889e6815b",
        title: "You identify as:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "d99130ed-8ed7-4927-980a-d6e8e3f4745b",
            text: "Female",
          },
          {
            id: "d1fa8858-4fb5-4a28-aaf9-02197425f5e4",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "2751a7dd-9c9a-4a26-88af-677df8bba6a5",
        title: "Looking for:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "3892b36a-8a64-443b-bb34-0d933885fc4f",
            text: "Female",
          },
          {
            id: "4b5ffbab-70e2-4ff7-9040-64d4fbe31ceb",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "c01267de-4473-4454-adad-bd978e971595",
        title: "Relationship status:",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "367b63d4-f3b1-48f4-aca4-7cd67b80030a",
            text: "Never married",
          },
          {
            id: "currently-separated",
            text: "Currently separated",
          },
          {
            id: "6b9cab6d-ef37-4e93-a489-54e52393b8f0",
            text: "Divorced",
          },
          {
            id: "bfaacfe4-a715-4541-ae9d-2aa57b28aede",
            text: "Widowed",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "a2dfe856-c8bc-44c8-be7b-a38e2c3329d9",
        title: "Would you like to have any/additional kids in the future?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "511b443a-59a0-4e0b-a408-e75244fa2486",
            text: "Yes",
          },
          {
            id: "becf4d45-4ddf-44c1-9ea5-22538f0ac948",
            text: "No",
          },
          {
            id: "0592557f-d0c1-4013-a1a8-4c888a73a477",
            text: "Maybe",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "3c8da21c-e09a-4085-8b49-db0cebb7bf7a",
        title: "How important is exercise or working out to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "53323386-fde9-4d54-9c13-a1ed359ffae4",
            text: "Not at all important",
          },
          {
            id: "d86f9fd5-3208-40fa-81c3-f541a426f52a",
            text: "Not really important",
          },
          {
            id: "8a566489-636b-47ac-9372-d0951d6b6dcb",
            text: "Somewhat important",
          },
          {
            id: "6e6e7314-0fb7-4275-9916-412af7feff41",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "e10023c2-472e-4003-a8c4-0e5fe2d0cf42",
        title:
          "How important is it for you to climb the ladder at your job and get promotions?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "c5a86aac-97da-4ceb-9c18-9337f82ad01b",
            text: "Not at all important",
          },
          {
            id: "a63de221-941f-4b43-a4a9-07a80f076176",
            text: "Not really important",
          },
          {
            id: "09feee2b-b4af-460e-862e-51bb62daa658",
            text: "Somewhat important",
          },
          {
            id: "ef92e6b3-31f2-41a8-bb38-a97b4170b83e",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "0949f8f5-f84f-4df9-91ff-7260630c6eb9",
        title: "How important are your spiritual/religious beliefs to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "40c7b88f-185c-4acd-a9cf-6568823faf28",
            text: "Not at all important",
          },
          {
            id: "85f03a85-b079-4c32-b478-c22c1ef975d0",
            text: "Not really important",
          },
          {
            id: "f44a0f87-ba5e-4b2b-9478-280c808b29ea",
            text: "Somewhat important",
          },
          {
            id: "157f8c1c-456f-4fbd-ae17-3eb8e6692995",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "fc386d71-8ef0-4661-894b-c193b3b5da44",
        title: "Which political topics are most important to you?",
        subtitle: "(Choose 2)",
        type: 2,
        limit: 2,
        answers: [
          {
            id: "7698f367-8aa0-4c62-9970-0115f359111e",
            text: "Not at all important",
          },
          {
            id: "7b7ca131-4d07-452d-a174-559259cd4b9d",
            text: "Not really important",
          },
          {
            id: "ab27e852-60e1-4ac7-9b62-b4e5b432ae75",
            text: "Somewhat important",
          },
          {
            id: "5073c312-508b-4af2-94f9-3462b70d7052",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "d479c412-0db9-42af-9702-308d5c016107",
        title: "Which religious beliefs are closest to your own?",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "979b9b27-f3d9-47df-93e2-2edb4057258a",
            text: "Atheist",
          },
          {
            id: "a86acabe-68ce-455d-9657-bdd05e2d1d77",
            text: "Spiritual but not religious",
          },
          {
            id: "c6755709-4844-4919-aec8-4748c223d7df",
            text: "Agnostic",
          },
          {
            id: "0c14060d-3b17-4c30-9501-18b833e0bda9",
            text: "Catholic",
          },
          {
            id: "4db711e1-0db8-4aad-9ce4-b5a06bec532e",
            text: "Christian / Protestant",
          },
          {
            id: "8c375574-4af3-4f3e-9068-fdbd5c000cc9",
            text: "Buddhist / Taoist",
          },
          {
            id: "e47ae986-93c3-43f2-b934-481424ef4405",
            text: "Hindu",
          },
          {
            id: "036ae449-ced1-41dc-a264-bc471347d996",
            text: "Muslim / Islam",
          },
          {
            id: "81b6b145-065c-4d48-984c-12fe52e08ecb",
            text: "Other",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
    ],
  },
  {
    id: "97b6d770-b0bf-45f7-8e82-5461eda8df7b",
    score: Number,
    createdAt: 1603342688819,
    verifyPhotoUrl: String, // use the actual URL for the photos you found!
    questions: [
      {
        id: "e7a226e4-3fdb-4230-8c6a-ef3889e6815b",
        title: "You identify as:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "d99130ed-8ed7-4927-980a-d6e8e3f4745b",
            text: "Female",
          },
          {
            id: "d1fa8858-4fb5-4a28-aaf9-02197425f5e4",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "2751a7dd-9c9a-4a26-88af-677df8bba6a5",
        title: "Looking for:",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "3892b36a-8a64-443b-bb34-0d933885fc4f",
            text: "Female",
          },
          {
            id: "4b5ffbab-70e2-4ff7-9040-64d4fbe31ceb",
            text: "Male",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "c01267de-4473-4454-adad-bd978e971595",
        title: "Relationship status:",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "367b63d4-f3b1-48f4-aca4-7cd67b80030a",
            text: "Never married",
          },
          {
            id: "currently-separated",
            text: "Currently separated",
          },
          {
            id: "6b9cab6d-ef37-4e93-a489-54e52393b8f0",
            text: "Divorced",
          },
          {
            id: "bfaacfe4-a715-4541-ae9d-2aa57b28aede",
            text: "Widowed",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "a2dfe856-c8bc-44c8-be7b-a38e2c3329d9",
        title: "Would you like to have any/additional kids in the future?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "511b443a-59a0-4e0b-a408-e75244fa2486",
            text: "Yes",
          },
          {
            id: "becf4d45-4ddf-44c1-9ea5-22538f0ac948",
            text: "No",
          },
          {
            id: "0592557f-d0c1-4013-a1a8-4c888a73a477",
            text: "Maybe",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "3c8da21c-e09a-4085-8b49-db0cebb7bf7a",
        title: "How important is exercise or working out to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "53323386-fde9-4d54-9c13-a1ed359ffae4",
            text: "Not at all important",
          },
          {
            id: "d86f9fd5-3208-40fa-81c3-f541a426f52a",
            text: "Not really important",
          },
          {
            id: "8a566489-636b-47ac-9372-d0951d6b6dcb",
            text: "Somewhat important",
          },
          {
            id: "6e6e7314-0fb7-4275-9916-412af7feff41",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "e10023c2-472e-4003-a8c4-0e5fe2d0cf42",
        title:
          "How important is it for you to climb the ladder at your job and get promotions?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "c5a86aac-97da-4ceb-9c18-9337f82ad01b",
            text: "Not at all important",
          },
          {
            id: "a63de221-941f-4b43-a4a9-07a80f076176",
            text: "Not really important",
          },
          {
            id: "09feee2b-b4af-460e-862e-51bb62daa658",
            text: "Somewhat important",
          },
          {
            id: "ef92e6b3-31f2-41a8-bb38-a97b4170b83e",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "0949f8f5-f84f-4df9-91ff-7260630c6eb9",
        title: "How important are your spiritual/religious beliefs to you?",
        type: 1,
        limit: 1,
        answers: [
          {
            id: "40c7b88f-185c-4acd-a9cf-6568823faf28",
            text: "Not at all important",
          },
          {
            id: "85f03a85-b079-4c32-b478-c22c1ef975d0",
            text: "Not really important",
          },
          {
            id: "f44a0f87-ba5e-4b2b-9478-280c808b29ea",
            text: "Somewhat important",
          },
          {
            id: "157f8c1c-456f-4fbd-ae17-3eb8e6692995",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "fc386d71-8ef0-4661-894b-c193b3b5da44",
        title: "Which political topics are most important to you?",
        subtitle: "(Choose 2)",
        type: 2,
        limit: 2,
        answers: [
          {
            id: "7698f367-8aa0-4c62-9970-0115f359111e",
            text: "Not at all important",
          },
          {
            id: "7b7ca131-4d07-452d-a174-559259cd4b9d",
            text: "Not really important",
          },
          {
            id: "ab27e852-60e1-4ac7-9b62-b4e5b432ae75",
            text: "Somewhat important",
          },
          {
            id: "5073c312-508b-4af2-94f9-3462b70d7052",
            text: "Extremely important",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
      {
        id: "d479c412-0db9-42af-9702-308d5c016107",
        title: "Which religious beliefs are closest to your own?",
        type: 2,
        limit: 0,
        answers: [
          {
            id: "979b9b27-f3d9-47df-93e2-2edb4057258a",
            text: "Atheist",
          },
          {
            id: "a86acabe-68ce-455d-9657-bdd05e2d1d77",
            text: "Spiritual but not religious",
          },
          {
            id: "c6755709-4844-4919-aec8-4748c223d7df",
            text: "Agnostic",
          },
          {
            id: "0c14060d-3b17-4c30-9501-18b833e0bda9",
            text: "Catholic",
          },
          {
            id: "4db711e1-0db8-4aad-9ce4-b5a06bec532e",
            text: "Christian / Protestant",
          },
          {
            id: "8c375574-4af3-4f3e-9068-fdbd5c000cc9",
            text: "Buddhist / Taoist",
          },
          {
            id: "e47ae986-93c3-43f2-b934-481424ef4405",
            text: "Hindu",
          },
          {
            id: "036ae449-ced1-41dc-a264-bc471347d996",
            text: "Muslim / Islam",
          },
          {
            id: "81b6b145-065c-4d48-984c-12fe52e08ecb",
            text: "Other",
          },
        ],
        selectedAnswerIds: [String], // an array of UUIDs indicating all selected answers. can be one or none, too.
      },
    ],
  },
];
