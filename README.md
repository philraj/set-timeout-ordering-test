# set-timeout-ordering-test

This is a small program written to test if a large array, produced by calling setTimeout with a delay of 0 milliseconds and pushing an incremented value each time, will be ordered at the end of the process, or if the event system doesn't guarantee that timeouts of identical delay will be run in the order in which they were created.
