---
tags:
- C++
- memory model
- ELF
- executable file format
date_published: 2021-03-29T04:23:24Z
date_last_modified: 2021-03-29T04:23:24Z
seo_keywords:
- C++
- memory model
- ELF
- file format
title: The C++ Memory Model
hero_image: ''
images: []
seo_description: ''

---
# Introduction

In computer hardware terminology, the word 'memory' denotes a physical matrix of cells, with each cell capable of storing a binary '1' or '0', known as a 'bit' (unit). The physical technology used to implement these cells vary depending on the type of memory being addressed within a computer system (which we shall discuss [later](#types-of-memory)). In most modern system, typically based on processors that implement the ARMv* or x86-64 architecture, these cells are _not_ individually addressable; the smallest addressable unit is typically a 'byte' (unit, consisting of 8 consecutive bits).

Each byte of memory is addressed via an address bus of N-bit width, where N is defined by the processor architecture. For example:

* ARMv7 architecture defines an address bus of 32-bits. Therefore, the architecture provisions a _physical_ address space of 2^32 bytes (from address=0 to address=2^32-1). \[1\]

  Therefore, the maximum addressable _physical_ memory for ARMv7 is:  
  2^32 bytes = 4,294,967,296 bytes = \~4.295 gigabytes.
* x86-64 architecture(s) define an address bus of 64-bits. Implying a _physical_ address space of 2^64 bytes (from address=0 to address=2^64-1). Thus implying that the maximum addressable _physical_ memory is:  
  2^64 bytes = 18,446,744,073,709,551,616 bytes = \~18.45 exabytes.

  In actuality,  x86-64 processors pragmatically restrict the _physical_ address space to 2^36 bytes (from address=0 to address=2^36-1). \[2\]

  Therefore the maximum addressable _physical_ memory for x86-64 machines is:  
  2^36 bytes = 68,719,476,736 bytes = \~68.72 gigabytes.

It is worth noting that a series of digital circuitry defined by the architecture of the processor _and_ the hardware interface specific to the memory package ultimately being addressed (e.g. DRAM IC), is responsible for the conversion of the N-bit wide address provisioned by a machine-code (read or write) instruction to the specific _physical_ 8 cells that constitute the particular byte being addressed.

Depending on the architecture of the processor, machine code instructions do not necessarily have to use the full N-bit wide address, instructions may use _address offsets_ instead. Memory _'addressing modes'_ are beyond the scope of this article.

## Types of Memory

# References

\[1\] Arm Ltd., Cambridge, UK, _ARM® Architecture Reference Manual: ARMv7-A and ARMv7-R edition._ (2007). Accessed: 29th March 2021. \[Online\]. Available: [https://developer.arm.com/documentation/ddi0406/cd](https://developer.arm.com/documentation/ddi0406/cd "https://developer.arm.com/documentation/ddi0406/cd")

\[2\] Intel Corporation, Santa Clara, California, USA, _Intel® 64 and IA-32 Architectures Software Developer's Manual,_ vol. 1. (2020). Accessed: 29th March 2021. \[Online\]. Available: [https://software.intel.com/content/www/us/en/develop/download/intel-64-and-ia-32-architectures-sdm-combined-volumes-1-2a-2b-2c-2d-3a-3b-3c-3d-and-4.html](https://software.intel.com/content/www/us/en/develop/download/intel-64-and-ia-32-architectures-sdm-combined-volumes-1-2a-2b-2c-2d-3a-3b-3c-3d-and-4.html "https://software.intel.com/content/www/us/en/develop/download/intel-64-and-ia-32-architectures-sdm-combined-volumes-1-2a-2b-2c-2d-3a-3b-3c-3d-and-4.html")

\[3\]