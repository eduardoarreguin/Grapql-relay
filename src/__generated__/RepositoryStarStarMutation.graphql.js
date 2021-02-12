/**
 * @flow
 * @relayHash f09500f7b8b29dcf41df1fc14dba860c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepositoryStarStarMutationVariables = {|
  input: {
    starrableId: string;
    clientMutationId?: ?string;
  };
|};
export type RepositoryStarStarMutationResponse = {|
  +addStar: ?{|
    +starrable: ?{| |};
  |};
|};
*/


/*
mutation RepositoryStarStarMutation(
  $input: AddStarInput!
) {
  addStar(input: $input) {
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
        "type": "AddStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryStarStarMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddStarInput!"
          }
        ],
        "concreteType": "AddStarPayload",
        "name": "addStar",
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
  "name": "RepositoryStarStarMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepositoryStarStarMutation",
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
            "type": "AddStarInput!"
          }
        ],
        "concreteType": "AddStarPayload",
        "name": "addStar",
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
  "text": "mutation RepositoryStarStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryStar_repository\n      id\n    }\n  }\n}\n\nfragment RepositoryStar_repository on Repository {\n  id\n  viewerHasStarred\n  stargazers {\n    totalCount\n  }\n}\n"
};

module.exports = batch;
