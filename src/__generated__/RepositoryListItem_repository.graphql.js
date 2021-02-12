/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type RepositoryListItem_repository = {|
  +name: string;
  +owner: {|
    +login: string;
  |};
  +url: any;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItem_repository",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": null,
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "login",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "url",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RepositoryIcon_repository",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RepositoryStar_repository",
      "args": null
    }
  ],
  "type": "Repository"
};

module.exports = fragment;
