
/** @jsx React.DOM */
/** This page is automatically generated by genapi.py, do not edit! */

/*
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant 
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var API = [
 {
  "key": "x",
  "name": "All Platforms",
  "tables": [
   {
    "columns": [
     {"name": "username","type": "std::string"},
     {"name": "command","type": "std::string"},
     {"name": "history_file","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genBashHistory",
    "name": "bash_history",
    "profile": {}
   },
   {
    "columns": [
     {"name": "feature","type": "std::string"},
     {"name": "value","type": "std::string"},
     {"name": "output_register","type": "std::string"},
     {"name": "output_bit","type": "std::string"},
     {"name": "input_eax","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genCPUID",
    "name": "cpuid",
    "profile": {}
   },
   {
    "columns": [
     {"name": "event","type": "std::string"},
     {"name": "minute","type": "std::string"},
     {"name": "hour","type": "std::string"},
     {"name": "day_of_month","type": "std::string"},
     {"name": "month","type": "std::string"},
     {"name": "day_of_week","type": "std::string"},
     {"name": "command","type": "std::string"},
     {"name": "path","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genCronTab",
    "name": "crontab",
    "profile": {}
   },
   {
    "columns": [
     {"name": "address","type": "std::string"},
     {"name": "hostnames","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genEtcHosts",
    "name": "etc_hosts",
    "profile": {}
   },
   {
    "columns": [
     {"name": "gid","type": "long long int"},
     {"name": "name","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genGroups",
    "name": "groups",
    "profile": {}
   },
   {
    "columns": [
     {"name": "login","type": "std::string"},
     {"name": "tty","type": "std::string"},
     {"name": "pid","type": "int"},
     {"name": "type","type": "int"},
     {"name": "time","type": "int"},
     {"name": "host","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genLastAccess",
    "name": "last",
    "profile": {}
   },
   {
    "columns": [
     {"name": "target_path","type": "std::string"},
     {"name": "time","type": "std::string"},
     {"name": "action","type": "std::string"},
     {"name": "transaction_id","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genTable",
    "name": "passwd_changes",
    "profile": {}
   },
   {
    "columns": [
     {"name": "pid","type": "int"},
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "key","type": "std::string"},
     {"name": "value","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genProcessEnvs",
    "name": "process_envs",
    "profile": {}
   },
   {
    "columns": [
     {"name": "pid","type": "int"},
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "file_type","type": "std::string"},
     {"name": "local_path","type": "std::string"},
     {"name": "local_host","type": "std::string"},
     {"name": "local_port","type": "std::string"},
     {"name": "remote_host","type": "std::string"},
     {"name": "remote_port","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genProcessOpenFiles",
    "name": "process_open_files",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "cmdline","type": "std::string"},
     {"name": "pid","type": "int"},
     {"name": "uid","type": "long long int"},
     {"name": "gid","type": "long long int"},
     {"name": "euid","type": "long long int"},
     {"name": "egid","type": "long long int"},
     {"name": "on_disk","type": "std::string"},
     {"name": "wired_size","type": "std::string"},
     {"name": "resident_size","type": "std::string"},
     {"name": "phys_footprint","type": "std::string"},
     {"name": "user_time","type": "std::string"},
     {"name": "system_time","type": "std::string"},
     {"name": "start_time","type": "std::string"},
     {"name": "parent","type": "int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genProcesses",
    "name": "processes",
    "profile": {}
   },
   {
    "columns": [
     {"name": "destination","type": "std::string"},
     {"name": "netmask","type": "std::string"},
     {"name": "gateway","type": "std::string"},
     {"name": "source","type": "std::string"},
     {"name": "flags","type": "int"},
     {"name": "interface","type": "std::string"},
     {"name": "mtu","type": "int"},
     {"name": "metric","type": "int"},
     {"name": "type","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genRoutes",
    "name": "routes",
    "profile": {}
   },
   {
    "columns": [
     {"name": "path","type": "std::string"},
     {"name": "unix_user","type": "std::string"},
     {"name": "unix_group","type": "std::string"},
     {"name": "permissions","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genSuidBin",
    "name": "suid_bin",
    "profile": {}
   },
   {
    "columns": [
     {"name": "hour","type": "int"},
     {"name": "minutes","type": "int"},
     {"name": "seconds","type": "int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genTime",
    "name": "time",
    "profile": {}
   },
   {
    "columns": [
     {"name": "uid","type": "long long int"},
     {"name": "gid","type": "long long int"},
     {"name": "username","type": "std::string"},
     {"name": "description","type": "std::string"},
     {"name": "directory","type": "std::string"},
     {"name": "shell","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genUsers",
    "name": "users",
    "profile": {}
   }
  ]
 },
 {
  "key": "darwin",
  "name": "Darwin (Apple OS X)",
  "tables": [
   {
    "columns": [
     {"name": "allow_signed_enabled","type": "int"},
     {"name": "firewall_unload","type": "int"},
     {"name": "global_state","type": "int"},
     {"name": "logging_enabled","type": "int"},
     {"name": "logging_option","type": "int"},
     {"name": "stealth_enabled","type": "int"},
     {"name": "version","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genALF",
    "name": "alf",
    "profile": {}
   },
   {
    "columns": [
     {"name": "path","type": "std::string"},
     {"name": "state","type": "int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genALFExceptions",
    "name": "alf_exceptions",
    "profile": {}
   },
   {
    "columns": [
     {"name": "process","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genALFExplicitAuths",
    "name": "alf_explicit_auths",
    "profile": {}
   },
   {
    "columns": [
     {"name": "service","type": "std::string"},
     {"name": "process","type": "std::string"},
     {"name": "state","type": "int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genALFServices",
    "name": "alf_services",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "bundle_executable","type": "std::string"},
     {"name": "bundle_identifier","type": "std::string"},
     {"name": "bundle_name","type": "std::string"},
     {"name": "bundle_short_version","type": "std::string"},
     {"name": "bundle_version","type": "std::string"},
     {"name": "bundle_package_type","type": "std::string"},
     {"name": "compiler","type": "std::string"},
     {"name": "development_region","type": "std::string"},
     {"name": "display_name","type": "std::string"},
     {"name": "info_string","type": "std::string"},
     {"name": "minimum_system_version","type": "std::string"},
     {"name": "category","type": "std::string"},
     {"name": "applescript_enabled","type": "std::string"},
     {"name": "copyright","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genApps",
    "name": "apps",
    "profile": {}
   },
   {
    "columns": [
     {"name": "common_name","type": "std::string"},
     {"name": "not_valid_before","type": "std::string"},
     {"name": "not_valid_after","type": "std::string"},
     {"name": "key_algorithm","type": "std::string"},
     {"name": "key_usage","type": "std::string"},
     {"name": "subject_key_id","type": "std::string"},
     {"name": "authority_key_id","type": "std::string"},
     {"name": "sha1","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genCerts",
    "name": "ca_certs",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "version","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genHomebrewPackages",
    "name": "homebrew_packages",
    "profile": {}
   },
   {
    "columns": [
     {"name": "interface","type": "std::string"},
     {"name": "address","type": "std::string"},
     {"name": "mask","type": "std::string"},
     {"name": "broadcast","type": "std::string"},
     {"name": "point_to_point","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genInterfaceAddresses",
    "name": "interface_addresses",
    "profile": {}
   },
   {
    "columns": [
     {"name": "interface","type": "std::string"},
     {"name": "mac","type": "std::string"},
     {"name": "type","type": "int"},
     {"name": "mtu","type": "std::string"},
     {"name": "metric","type": "std::string"},
     {"name": "ipackets","type": "std::string"},
     {"name": "opackets","type": "std::string"},
     {"name": "ibytes","type": "std::string"},
     {"name": "obytes","type": "std::string"},
     {"name": "ierrors","type": "std::string"},
     {"name": "oerrors","type": "std::string"},
     {"name": "last_change","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genInterfaceDetails",
    "name": "interface_details",
    "profile": {}
   },
   {
    "columns": [
     {"name": "idx","type": "int"},
     {"name": "refs","type": "int"},
     {"name": "size","type": "std::string"},
     {"name": "wired","type": "std::string"},
     {"name": "name","type": "std::string"},
     {"name": "version","type": "std::string"},
     {"name": "linked_against","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genKextstat",
    "name": "kextstat",
    "profile": {}
   },
   {
    "columns": [
     {"name": "path","type": "std::string"},
     {"name": "name","type": "std::string"},
     {"name": "label","type": "std::string"},
     {"name": "run_at_load","type": "std::string"},
     {"name": "keep_alive","type": "std::string"},
     {"name": "on_demand","type": "std::string"},
     {"name": "disabled","type": "std::string"},
     {"name": "user_name","type": "std::string"},
     {"name": "group_name","type": "std::string"},
     {"name": "stdout_path","type": "std::string"},
     {"name": "stderr_path","type": "std::string"},
     {"name": "start_interval","type": "std::string"},
     {"name": "program_arguments","type": "std::string"},
     {"name": "program","type": "std::string"},
     {"name": "watch_paths","type": "std::string"},
     {"name": "queue_directories","type": "std::string"},
     {"name": "inetd_compatibility","type": "std::string"},
     {"name": "start_on_mount","type": "std::string"},
     {"name": "root_directory","type": "std::string"},
     {"name": "working_directory","type": "std::string"},
     {"name": "process_type","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genLaunchd",
    "name": "launchd",
    "profile": {}
   },
   {
    "columns": [
     {"name": "pid","type": "int"},
     {"name": "port","type": "int"},
     {"name": "protocol","type": "int"},
     {"name": "family","type": "int"},
     {"name": "address","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genListeningPorts",
    "name": "listening_ports",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "type","type": "std::string"},
     {"name": "value","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genNVRAM",
    "name": "nvram",
    "profile": {}
   },
   {
    "columns": [
     {"name": "major","type": "int"},
     {"name": "minor","type": "int"},
     {"name": "patch","type": "int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genOSXVersion",
    "name": "osx_version",
    "profile": {}
   },
   {
    "columns": [
     {"name": "path","type": "std::string"},
     {"name": "creator","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genQuarantine",
    "name": "quarantine",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "path","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genStartupItems",
    "name": "startup_items",
    "profile": {}
   }
  ]
 },
 {
  "key": "linux",
  "name": "Ubuntu, CentOS",
  "tables": [
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "parent","type": "std::string"},
     {"name": "vendor","type": "std::string"},
     {"name": "model","type": "std::string"},
     {"name": "size","type": "long long int"},
     {"name": "uuid","type": "std::string"},
     {"name": "type","type": "std::string"},
     {"name": "label","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genBlockDevs",
    "name": "block_devices",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "size","type": "std::string"},
     {"name": "used_by","type": "std::string"},
     {"name": "status","type": "std::string"},
     {"name": "address","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genKernelModules",
    "name": "kernel_modules",
    "profile": {}
   },
   {
    "columns": [
     {"name": "fsname","type": "std::string"},
     {"name": "fsname_real","type": "std::string"},
     {"name": "path","type": "std::string"},
     {"name": "type","type": "std::string"},
     {"name": "opts","type": "std::string"},
     {"name": "freq","type": "int"},
     {"name": "passno","type": "int"},
     {"name": "block_size","type": "long long int"},
     {"name": "blocks","type": "long long int"},
     {"name": "blocks_free","type": "long long int"},
     {"name": "blocks_avail","type": "long long int"},
     {"name": "inodes","type": "long long int"},
     {"name": "inodes_free","type": "long long int"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genMounts",
    "name": "mounts",
    "profile": {}
   },
   {
    "columns": [
     {"name": "slot","type": "std::string"},
     {"name": "device_class","type": "std::string"},
     {"name": "vendor","type": "std::string"},
     {"name": "model","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genLspci",
    "name": "pci_devices",
    "profile": {}
   },
   {
    "columns": [
     {"name": "local_port","type": "std::string"},
     {"name": "remote_port","type": "std::string"},
     {"name": "local_ip","type": "std::string"},
     {"name": "remote_ip","type": "std::string"},
     {"name": "inode","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genPortInode",
    "name": "port_inode",
    "profile": {}
   },
   {
    "columns": [
     {"name": "name","type": "std::string"},
     {"name": "version","type": "std::string"},
     {"name": "release","type": "std::string"},
     {"name": "source","type": "std::string"},
     {"name": "size","type": "std::string"},
     {"name": "sha1","type": "std::string"},
     {"name": "arch","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genRpms",
    "name": "rpm_packages",
    "profile": {}
   },
   {
    "columns": [
     {"name": "pid","type": "std::string"},
     {"name": "inode","type": "std::string"}
    ],
    "description": "",
    "foreign_keys": [],
    "function": "genSocketInode",
    "name": "socket_inode",
    "profile": {}
   }
  ]
 }
];

module.exports = API;


