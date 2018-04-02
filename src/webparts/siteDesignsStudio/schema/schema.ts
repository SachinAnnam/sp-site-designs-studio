export default {
  "$schema": "http://json-schema.org/draft-06/schema#",
	"title": "SiteScript",
	"description": "A SharePoint Site Script definition",
	"definitions": {
		"createSPList_setTitle": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setTitle" ]
				},
				"title": {
          "title": "Title",
          "description": "Title of the site",
					"type": "string"
				}
			},
			"required": [ "verb", "title" ]
		},
		"createSPList_setDescription": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setDescription" ]
				},
				"description": {
          "title": "Description",
          "description": "Description of the site",
					"type": "string"
				}
			},
			"required": [ "verb", "description" ]
		},
		"createSPList_addSPField": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addSPField" ]
				},
				"fieldType": {
          "title": "Field Type",
          "description": "The type of the field",
					"enum": [ "Text", "Note", "Number", "Boolean", "User", "DateTime" ]
				},
				"displayName": {
          "title": "Display Name",
          "description": "The name of the field to display",
					"type": "string"
				},
				"isRequired": {
          "title": "Is required",
          "description": "Is the field required",
					"type": "boolean"
				},
				"addToDefaultView": {
          "title": "Add to default view",
          "description": "The field is added to default view",
					"type": "boolean"
				}
			},
			"required": [ "verb", "fieldType", "displayName" ]
		},
		"createSPList_deleteSPField": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "deleteSPField" ]
				},
				"displayName": {
          "title": "Display Name",
          "description": "The display name of the field",
					"type": "string"
				}
			},
			"required": [ "verb", "displayName" ]
		},
		"createSPList_addContentType": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addContentType" ]
				},
				"name": {
          "title": "Content Type's name",
          "description": "The name of an existing Site Content Type",
					"type": "string"
				}
			},
			"required": [ "verb", "name" ]
		},
		"createSPList_removeContentType": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "removeContentType" ]
				},
				"name": {
          "title": "Content Type's name",
          "description": "The name of an existing Site Content Type",
					"type": "string"
				}
			},
			"required": [ "verb", "name" ]
		},
		"createSPList_setSPFieldCustomFormatter": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setSPFieldCustomFormatter" ]
				},
				"fieldDisplayName": {
          "title": "Field's display name",
          "description": "The display name of the field to apply the formatting on",
					"type": "string"
				},
				"formatterJSON": {
          "title": "The formatter JSON",
          "description": "The formatter rules expressed in JSON",
					"type": "object"
				}
			},
			"required": [ "verb", "fieldDisplayName", "formatterJSON" ]
		},
		"createSPList": {
			"type": "object",
			"description": "Create a SharePoint List script",
			"properties": {
				"verb": {
					"enum": [ "createSPList" ]
				},
				"listName": {
          "title": "List's name",
          "description": "The name of the List",
					"type": "string"
				},
				"templateType": {
          "title": "List's Template Type",
          "description": "The template type of the list",
					"type": "number"
				},
				"subactions": {
					"type": "array",
					"items": {
						"anyOf": [
							{ "type": "object", "$ref": "#/definitions/createSPList_setTitle" },
              { "type": "object", "$ref": "#/definitions/createSPList_setDescription" },
              { "type": "object", "$ref": "#/definitions/createSPList_addSPField" },
							{ "type": "object", "$ref": "#/definitions/createSPList_deleteSPField" },
							{ "type": "object", "$ref": "#/definitions/createSPList_addContentType" },
							{ "type": "object", "$ref": "#/definitions/createSPList_removeContentType" },
							{ "type": "object", "$ref": "#/definitions/createSPList_setSPFieldCustomFormatter" }
						]
					}
				}
			},
			"required":["verb","listName","templateType"]
		},
		"addNavLink": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addNavLink" ]
				},
				"url": {
          "title": "Link's URL",
          "description":"The URL of the navigation Link",
					"type": "string"
				},
				"displayName": {
          "title": "Link's text",
          "description":"The text of the navigation Link",
					"type": "string"
				},
				"isWebRelative": {
          "title": "Is Web Relative",
          "description":"Is the URL of the link web-relative ?",
					"type": "boolean"
				}
			},
			"required": [ "verb", "url", "displayName", "isWebRelative" ]
		},
		"applyTheme": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "applyTheme" ]
				},
				"themeName": {
          "title": "Theme's name",
          "descrtiption":"The name of the Theme to apply",
					"type": "string"
				}
			},
			"required": [ "verb", "themeName" ]
		},
		"setSiteLogo": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setSiteLogo" ]
				},
				"url": {
          "title": "Site logo's URL",
          "descrtiption":"The URL of the Site logo",
					"type": "string"
				}
			},
			"required": [ "verb", "url" ]
		},
		"joinHubSite": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "joinHubSite" ]
				},
				"hubSiteId": {
          "title": "Hub Site's ID",
          "description":"The identifier of the Hub Site",
					"type": "string"
				}
			},
			"required": [ "verb", "hubSiteId" ]
		},
		"triggerFlow": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "triggerFlow" ]
				},
				"url": {
          "title": "Flow's URL",
          "description": "The URL of the Flow to trigger",
					"type": "string"
				},
				"name": {
          "title": "Flow's name",
          "description": "The name of the Flow to trigger",
					"type": "string"
				},
				"parameters": {
          "title": "Flow's parameters",
          "description": "The set of parameters of the Flow",
					"type": "object"
				}
			},
			"required": [ "verb", "url", "name" ]
		}
	},
	"type": "object",
	"properties": {
		"actions": {
			"type": "array",
			"description": "The definition of the script actions",
			"items": {
				"anyOf": [
					{ "type": "object", "$ref": "#/definitions/createSPList" },
					{ "type": "object", "$ref": "#/definitions/addNavLink" },
					{ "type": "object", "$ref": "#/definitions/applyTheme" },
					{ "type": "object", "$ref": "#/definitions/setSiteLogo" },
					{ "type": "object", "$ref": "#/definitions/joinHubSite" },
					{ "type": "object", "$ref": "#/definitions/triggerFlow" }
				]
			}
		},
		"bindata": {
			"type": "object",
			"additionalProperties": false
		},
		"version": {
			"type": "number"
		}
	},
	"required": [
		"actions", "bindata", "version"
	]
};
