initSidebarItems({"macro":[["admin_debug",""],["admin_error",""],["admin_info",""],["admin_warn",""],["btreemap",""],["btreeset",""],["entry_init",""],["f_and",""],["f_inc",""],["f_or",""],["filter",""],["filter_all",""],["filter_error",""],["filter_info",""],["filter_rec",""],["filter_trace",""],["filter_warn",""],["mergemaps",""],["mergesets",""],["modlist",""],["perf_trace",""],["request_error",""],["request_info",""],["request_trace",""],["request_warn",""],["security_access",""],["security_critical",""],["security_error",""],["security_info",""],["smolset",""],["spanned",""],["tagged_event",""],["vs_bool",""],["vs_cid",""],["vs_iname",""],["vs_index",""],["vs_iutf8",""],["vs_refer",""],["vs_syntax",""],["vs_utf8",""],["vs_uuid",""]],"mod":[["actors","This module contains the server’s async tasks that are called from the various frontend components to conduct operations. These are seperated based on protocol versions and if they are read or write transactions internally."],["audit",""],["be","The backend. This contains the “low level” storage and query code, which is implemented as a json-like kv document database. This has no rules about content of the server, which are all enforced at higher levels. The role of the backend is to persist content safely to disk, load that content, and execute queries utilising indexes in the most effective way possible."],["config","The server configuration as processed from the startup wrapper. This controls a number of variables that determine how our backends, query server, and frontends are configured."],["constants",""],["credential",""],["crypto","This module contains cryptographic setup code, a long with what policy and ciphers we accept."],["entry","Entries are the base unit of object storage in the server. This is one of the three foundational concepts along with `filter`s and `schema` that everything else builds upon."],["event","An `event` is a self contained module of data, that contains all of the required information for any operation to proceed. While there are many types of potential events, they all eventually lower to one of:"],["filter","`Filter`s are one of the three foundational concepts of the design in kanidm. They are used in nearly every aspect of the server to provide searching of datasets and assertion of entry properties."],["identity","Contains structures related to the Identity that initiated an `Event` in the server. Generally this Identity is what will have access controls applied to and this provides the set of `Limits` to confine how many resources that the identity may consume during operations to prevent denial-of-service."],["idm","The Identity Management components that are layered ontop of the QueryServer. These allow rich and expressive events and transformations that are lowered into the correct/relevant actions in the QueryServer. Generally this is where “Identity Management” policy and code is implemented."],["interval","This contains scheduled tasks/interval tasks that are run inside of the server on a schedule as background operations."],["ldap","LDAP specific operations handling components. This is where LDAP operations are sent to for processing."],["macros",""],["prelude","A prelude of imports that should be imported by all other Kanidm modules to help make imports cleaner."],["schema","`Schema` is one of the foundational concepts of the server. It provides a set of rules to enforce that `Entries` ava’s must be compliant to, to be considered valid for commit to the database. This allows us to provide requirements and structure as to what an `Entry` must have and may contain which enables many other parts to function."],["server","`server` contains the query server, which is the main high level construction to coordinate queries and operations in the server."],["status","An actor that shows the servers current status and statistics. (TODO)."],["tracing_tree",""],["utils",""],["value","Inside an entry, the key-value pairs are stored in these [`Value`] types. The components of the [`Value`] module allow storage and transformation of various types of input into strongly typed values, allows their comparison, filtering and more. It also has the code for serialising these into a form for the backend that can be persistent into the `Backend`."],["valueset",""]]});