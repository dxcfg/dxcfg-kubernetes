/* Generated for apiextensions-apiserver/pkg/apis/apiextensions/v1/mod.ts */
import {
  ListMeta,
  ObjectMeta,
  Time,
} from "../../../../../apimachinery/pkg/apis/meta/v1/mod.ts";

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export type CustomResourceColumnDefinition = {
  /** description is a human readable description of this column. */
  description?: string;

  /** format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https:github.comOAIOpenAPI-Specificationblobmasterversions2.0.md#data-types for details. */
  format?: string;

  /** jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column. */
  jsonPath: string;

  /** name is a human readable name for the column. */
  name: string;

  /** priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0. */
  priority?: number;

  /** type is an OpenAPI type definition for this column. See https:github.comOAIOpenAPI-Specificationblobmasterversions2.0.md#data-types for details. */
  type: string;
};

/** CustomResourceConversion describes how to convert different versions of a CR. */
export type CustomResourceConversion = {
  /** strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set. */
  strategy: string;

  /** webhook describes how to call the conversion webhook. Required when `strategy` is set to `Webhook`. */
  webhook?: WebhookConversion;
};

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export type CustomResourceDefinition = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ObjectMeta;

  /** spec describes how the user wants the resources to appear */
  spec: CustomResourceDefinitionSpec;

  /** status indicates the actual state of the CustomResourceDefinition */
  status?: CustomResourceDefinitionStatus;
};
export function createCustomResourceDefinition<
  T extends Omit<CustomResourceDefinition, "apiVersion" | "kind">,
>(
  data: T,
):
  & CustomResourceDefinition
  & T
  & Pick<CustomResourceDefinition, "apiVersion" | "kind"> {
  return {
    apiVersion: "apiextensions.k8s.io/v1",
    kind: "CustomResourceDefinition",
    ...data,
  };
}

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export type CustomResourceDefinitionCondition = {
  /** lastTransitionTime last time the condition transitioned from one status to another. */
  lastTransitionTime?: Time;

  /** message is a human-readable message indicating details about last transition. */
  message?: string;

  /** reason is a unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;

  /** status is the status of the condition. Can be True, False, Unknown. */
  status: string;

  /** type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
  type: string;
};

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export type CustomResourceDefinitionList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#resources */
  apiVersion?: string;

  /** items list individual CustomResourceDefinition objects */
  items: CustomResourceDefinition[];

  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#types-kinds */
  kind?: string;

  /** Standard object's metadata More info: https:git.k8s.iocommunitycontributorsdevelsig-architectureapi-conventions.md#metadata */
  metadata?: ListMeta;
};
export function createCustomResourceDefinitionList<
  T extends Omit<CustomResourceDefinitionList, "apiVersion" | "kind">,
>(
  data: T,
):
  & CustomResourceDefinitionList
  & T
  & Pick<CustomResourceDefinitionList, "apiVersion" | "kind"> {
  return {
    apiVersion: "apiextensions.k8s.io/v1",
    kind: "CustomResourceDefinitionList",
    ...data,
  };
}

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export type CustomResourceDefinitionNames = {
  /** categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`. */
  categories?: string[];

  /** kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls. */
  kind: string;

  /** listKind is the serialized kind of the list for this resource. Defaults to "`kind`List". */
  listKind?: string;

  /** plural is the plural name of the resource to serve. The custom resources are served under `apis<group><version>...<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase. */
  plural: string;

  /** shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase. */
  shortNames?: string[];

  /** singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`. */
  singular?: string;
};

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export type CustomResourceDefinitionSpec = {
  /** conversion defines conversion settings for the CRD. */
  conversion?: CustomResourceConversion;

  /** group is the API group of the defined custom resource. The custom resources are served under `apis<group>...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). */
  group: string;

  /** names specify the resource and kind names for the custom resource. */
  names: CustomResourceDefinitionNames;

  /** preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https:kubernetes.iodocstasksaccess-kubernetes-apicustom-resourcescustom-resource-definitions#pruning-versus-preserving-unknown-fields for details. */
  preserveUnknownFields?: boolean;

  /** scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`. */
  scope: string;

  /** versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
  versions: CustomResourceDefinitionVersion[];
};

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export type CustomResourceDefinitionStatus = {
  /** acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec. */
  acceptedNames?: CustomResourceDefinitionNames;

  /** conditions indicate state for particular aspects of a CustomResourceDefinition */
  conditions?: CustomResourceDefinitionCondition[];

  /** storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list. */
  storedVersions?: string[];
};

/** CustomResourceDefinitionVersion describes a version for CRD. */
export type CustomResourceDefinitionVersion = {
  /** additionalPrinterColumns specifies additional columns returned in Table output. See https:kubernetes.iodocsreferenceusing-apiapi-concepts#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. */
  additionalPrinterColumns?: CustomResourceColumnDefinition[];

  /** deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. */
  deprecated?: boolean;

  /** deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. */
  deprecationWarning?: string;

  /** name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `apis<group><version>...` if `served` is true. */
  name: string;

  /** schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource. */
  schema?: CustomResourceValidation;

  /** served is a flag enablingdisabling this version from being served via REST APIs */
  served: boolean;

  /** storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true. */
  storage: boolean;

  /** subresources specify what subresources this version of the defined custom resource have. */
  subresources?: CustomResourceSubresources;
};

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export type CustomResourceSubresourceScale = {
  /** labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https:kubernetes.iodocstasksaccess-kubernetes-apicustom-resourcescustom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `scale` subresource will default to the empty string. */
  labelSelectorPath?: string;

  /** specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `scale` subresource will return an error on GET. */
  specReplicasPath: string;

  /** statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `scale` subresource will default to 0. */
  statusReplicasPath: string;
};

/** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a status subresource for the custom resource * PUT requests to the status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUTPOSTPATCH requests to the custom resource ignore changes to the status stanza */
export type CustomResourceSubresourceStatus = {};

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export type CustomResourceSubresources = {
  /** scale indicates the custom resource should serve a `scale` subresource that returns an `autoscalingv1` Scale object. */
  scale?: CustomResourceSubresourceScale;

  /** status indicates the custom resource should serve a `status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `status` subresource ignore changes to anything other than the `status` stanza of the object. */
  status?: CustomResourceSubresourceStatus;
};

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export type CustomResourceValidation = {
  /** openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning. */
  openAPIV3Schema?: JSONSchemaProps;
};

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export type ExternalDocumentation = {
  description?: string;

  url?: string;
};

/** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
export type JSON = any;

/** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http:json-schema.org). */
export type JSONSchemaProps = {
  $ref?: string;

  $schema?: string;

  additionalItems?: JSONSchemaPropsOrBool;

  additionalProperties?: JSONSchemaPropsOrBool;

  allOf?: JSONSchemaProps[];

  anyOf?: JSONSchemaProps[];

  /** default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false. */
  default?: JSON;

  definitions?: {
    [key: string]: JSONSchemaProps;
  };

  dependencies?: {
    [key: string]: JSONSchemaPropsOrStringArray;
  };

  description?: string;

  enum?: JSON[];

  example?: JSON;

  exclusiveMaximum?: boolean;

  exclusiveMinimum?: boolean;

  externalDocs?: ExternalDocumentation;

  /** format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:

- bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang neturl.ParseRequestURI - email: an email address as parsed by Golang netmail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\d{3}[- ]?\d{2}[- ]?\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339. */
  format?: string;

  id?: string;

  items?: JSONSchemaPropsOrArray;

  maxItems?: number;

  maxLength?: number;

  maxProperties?: number;

  maximum?: number;

  minItems?: number;

  minLength?: number;

  minProperties?: number;

  minimum?: number;

  multipleOf?: number;

  not?: JSONSchemaProps;

  nullable?: boolean;

  oneOf?: JSONSchemaProps[];

  pattern?: string;

  patternProperties?: {
    [key: string]: JSONSchemaProps;
  };

  properties?: {
    [key: string]: JSONSchemaProps;
  };

  required?: string[];

  title?: string;

  type?: string;

  uniqueItems?: boolean;

  /** x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
  ["x-kubernetes-embedded-resource"]?: boolean;

  /** x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:

1) anyOf:
   - type: integer
   - type: string
2) allOf:
   - anyOf:
     - type: integer
     - type: string
   - ... zero or more */
  ["x-kubernetes-int-or-string"]?: boolean;

  /** x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.

This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).

The properties specified must either be required or have a default value, to ensure those properties are present for all list items. */
  ["x-kubernetes-list-map-keys"]?: string[];

  /** x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:

1) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic lists will be entirely replaced when updated. This extension
     may be used on any type of list (struct, scalar, ...).
2) `set`:
     Sets are lists that must not have multiple items with the same value. Each
     value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
     array with x-kubernetes-list-type `atomic`.
3) `map`:
     These lists are like maps in that their elements have a non-index key
     used to identify them. Order is preserved upon merge. The map tag
     must only be used on a list with elements of type object.
Defaults to atomic for arrays. */
  ["x-kubernetes-list-type"]?: string;

  /** x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:

1) `granular`:
     These maps are actual maps (key-value pairs) and each fields are independent
     from each other (they can each be manipulated by separate actors). This is
     the default behaviour for all maps.
2) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic maps will be entirely replaced when updated. */
  ["x-kubernetes-map-type"]?: string;

  /** x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
  ["x-kubernetes-preserve-unknown-fields"]?: boolean;
};

/** JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
export type JSONSchemaPropsOrArray = any;

/** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
export type JSONSchemaPropsOrBool = any;

/** JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
export type JSONSchemaPropsOrStringArray = any;

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type ServiceReference = {
  /** name is the name of the service. Required */
  name: string;

  /** namespace is the namespace of the service. Required */
  namespace: string;

  /** path is an optional URL path at which the webhook will be contacted. */
  path?: string;

  /** port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility. */
  port?: number;
};

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export type WebhookClientConfig = {
  /** caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
  caBundle?: string;

  /** service is a reference to the service for this webhook. Either service or url must be specified.

If the webhook is running within the cluster, then you should use `service`. */
  service?: ServiceReference;

  /** url gives the location of the webhook, in standard URL form (`scheme:host:portpath`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https:".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either. */
  url?: string;
};

/** WebhookConversion describes how to call a conversion webhook */
export type WebhookConversion = {
  /** clientConfig is the instructions for how to call the webhook if strategy is `Webhook`. */
  clientConfig?: WebhookClientConfig;

  /** conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. */
  conversionReviewVersions: string[];
};
