/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Dashboard = {|
  +viewer: {|
    +repositories: {|
      +totalCount: number;
      +pageInfo: {|
        +hasNextPage: boolean;
        +endCursor: ?string;
      |};
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string;
        |};
      |}>;
    |};
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "viewer",
          "repositories"
        ]
      }
    ]
  },
  "name": "Dashboard",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "User",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": "repositories",
          "args": null,
          "concreteType": "RepositoryConnection",
          "name": "__Dashboard_repositories_connection",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "totalCount",
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "hasNextPage",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "endCursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "RepositoryEdge",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "Repository",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "kind": "FragmentSpread",
                      "name": "RepositoryListItem_repository",
                      "args": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "type": "RepositoryConnection",
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "RepositoryEdge",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "cursor",
                      "storageKey": null
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "Repository",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "__typename",
                          "storageKey": null
                        }
                      ],
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
  ],
  "type": "Query"
};

module.exports = fragment;
