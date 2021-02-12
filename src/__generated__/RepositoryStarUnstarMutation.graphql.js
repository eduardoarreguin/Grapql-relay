/**
 * @flow
 * @relayHash 90a50263b159ead3a74849e3717e3c88
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepositoryStarUnstarMutationVariables = {|
  input: {
    starrableId: string;
    clientMutationId?: ?string;
  };
|};
export type RepositoryStarUnstarMutationResponse = {|
  +removeStar: ?{|
    +starrable: ?{| |};
  |};
|};
*/


/*
mutation RepositoryStarUnstarMutation(
  $input: RemoveStarInput!
) {
  removeStar(input: $input) {
    starrable {
      __typename
      ...RepositoryStar_repository
      id
    }
  }
}

fragment RepositoryStar_repository on Repository {
  id
  viewerHasStarred
  stargazers {
    totalCount
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryStarUnstarMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveStarInput!"
          }
        ],
        "concreteType": "RemoveStarPayload",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "RepositoryStar_repository",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RepositoryStarUnstarMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepositoryStarUnstarMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveStarInput!"
          }
        ],
        "concreteType": "RemoveStarPayload",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "Repository",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "viewerHasStarred",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "StargazerConnection",
                    "name": "stargazers",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "totalCount",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation RepositoryStarUnstarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryStar_repository\n      id\n    }\n  }\n}\n\nfragment RepositoryStar_repository on Repository {\n  id\n  viewerHasStarred\n  stargazers {\n    totalCount\n  }\n}\n"
};

module.exports = batch;
